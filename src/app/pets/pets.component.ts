import { CarouselComponent } from './../templates/carousel/carousel.component';
import { AlertComponent } from './../templates/alert/alert.component';
import { TutorialComponent } from './../templates/tutorial/tutorial.component';
import { Breed, Pet, PetType } from '../entity/entities';
import { PETS_WIZARD_PAGE, APPOINTMENTS_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { PetApiService } from '../service/services';
import { StringUtils, ObjectUtils, DateUtils } from '../utils';
import { ColorClass } from '../styles/styles';
import { CordovaService } from '../cordova.service';
import { ReturnCode } from '../entity/system';
import { Router, ActivatedRoute } from '@angular/router';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory, DialogRef } from 'ngx-modialog';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase {

  constructor(private api : PetApiService, 
    session : SessionService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private cordova : CordovaService) {
    super(session);
  }
  
  private _pets : Pet[];
  protected menuEntries = [];
  private contextMenu : any;

  @ViewChild(TutorialComponent, { static: false }) private tutorialComponent: TutorialComponent;
  //@ViewChild(ContextMenuComponent, { static: true }) public basicMenu: ContextMenuComponent;

  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];

  get pets() : Pet[] {
    return this._pets;
  }

  ngOnInit() {
    this.menu.disable = false;
    this.menu.disableMenu = false;
    this.title = this.language.myPet;
    this.setTitle();
    this.createContextMenu();
    this.setPets();
  }

  ngAfterContentInit() {
    if(!this.loading && (this.user == undefined || this.user.pets == undefined || this.user.pets.length == 0)){
      setTimeout(() => this.tutorialComponent.show());
    }
  }

  private createContextMenu() {

    this.menuEntries = [];

    this.menuEntries.push({
        title: 'Entry 1',
        id: 'test'
    });
    this.menuEntries.push({
        title: 'Entry 2',
        id: 'foo'
    });
    this.menuEntries.push({
        title: '',
        id: '',
        isSeparator: true
    });
    this.menuEntries.push({
        title: 'Entry 3',
        id: 'bar'
    });
 
    this.contextMenu = {
      title: 'Pet',
      items: this.menuEntries,
      x: 0,
      y: 0
    }
  }

  openContextMenu() {
    this.cordova.ContextMenu.open(this.contextMenu, this.onMenu);
  }

  private onMenu = (ele) => {
    console.log('You clicked the entry with an id of ' + ele);
  }

  private setPets() {
    if(!ObjectUtils.isEmpty(this.user)){
      this._pets = this.user.pets;
    }
  }

  public loadPets() : void {

    if(!ObjectUtils.isEmpty(this.user)){

      const pets = this.api.getByUser(this.user);
      this.user.pets = [];
      this.loading = true;
      pets.subscribe(result => {

        console.log(result);
        this.loading = false;

        if (result && result.sid) {
          if(result.code == ReturnCode.SUCCESS){
            this.user.pets = result.data;
          }
        }
        
      }, error => {
        console.error(error);
        this.loading = false;
      });
    }
  }

  public removePet(pet : Pet) {
    const res = this.api.delete(pet);
    const index = this.user.pets.indexOf(pet);
    if(index > -1) {
      this.user.pets.splice(index, 1);
    }
    res.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result && result.code == ReturnCode.SUCCESS){

      }
    }, error => {
      console.error(error);
      this.loading = false;
    });
  }

  protected view(pet : Pet) {
    if(!ObjectUtils.isEmpty(pet.id)){
      this.router.navigateByUrl(APPOINTMENTS_PAGE);
    }
  }

  protected add() {
    this.session.zone.run(() => 
      this.router.navigate([PETS_WIZARD_PAGE], {replaceUrl: true, relativeTo: this.activatedRoute}));
  }
}

///////////////////////////

@Component({
  selector: 'app-pets-type',
  templateUrl: './pets.type.component.html',
  styleUrls: ["./pets.picker.component.css"]
})
export class PetTypeComponent extends AppBase {

  types : PetType[] = [];
  pet : Pet;
  carouselComponent : CarouselComponent;

  constructor(private api : PetApiService, 
    private modal: Modal,
    session : SessionService) {
      super(session);
  }
  
  ngOnInit() {

    this.loading = true;

    const response = this.api.getAllPetTypes();
    
    response.subscribe(result => {

      console.log(result);

      if(result.code == ReturnCode.SUCCESS){

        if (result && result.sid) {
          this.types = result.data;
        }
      }
      else {
        //alert(this.api.getErrorMessage(result, this.language));
      }
      this.loading = false;
    } ,error => {
      console.log(error);
      this.loading = false;
    });
  }
  
  select(selected : PetType) : void {

    if(selected.breeds != undefined && selected.breeds.length > 0){
      
      //this.dialog = true;
      const dialogRef = this.modal
        .open(BreedPickerComponent, overlayConfigFactory({ isBlocking: false , data : {type : selected} }, BSModalContext));

      dialogRef.result
        .then(res => {
          if(!ObjectUtils.isEmpty(res) &&  res.result)
            this.selectPetType(selected, res.breed)
          });

      dialogRef.onDestroy.subscribe(() => {
        //this.dialog = false;
      });
    }
  }

  selectPetType = (type : PetType, breed : Breed) => {
    console.log(type);
    console.log(breed);
    if(!ObjectUtils.isEmpty(breed)) {
      this.pet.petType = type;
      this.pet.breed = breed;
      this.next();
    }
  }

  next() : void {
    /*this.session.zone.run(() => 
      this.router.navigate([PETS_PAGE,PETS_WIZARD_INFO_PAGE], {replaceUrl: true,  queryParams: {id: ""}}));*/
      this.carouselComponent.next();
  }

}

///////////////////////////////////////////////

@Component({
  selector: 'app-pets-breeds',
  templateUrl: './pets.breeds.component.html',
  styleUrls: ["./pets.picker.component.css"]
})
export class BreedPickerComponent extends AppBase  {

  private type : PetType;

  constructor(private dialogRef : DialogRef<any>, session : SessionService) {
    super(session);
    const data = this.dialogRef.context.data;
    if(data != undefined){
      this.type = data.type;
    }
  }

  @ViewChild("modalBody", { static: true }) private modalBody;

  ngAfterViewInit(): void {
    this.modalBody.nativeElement.style.overflowY = "auto";
    this.modalBody.nativeElement.style.overflowX = "hidden";
    const maxHeight = ((window.innerHeight - 30) + "px");
    this.modalBody.nativeElement.style.maxHeight = maxHeight;
  }
  
  select(selected : Breed) : void {
    this.closeDialog({result : true, breed: selected});
  }

  private closeDialog(selected) : void {
    this.dialogRef.close(selected);
  }

}

///////////////////////////////////////////////

@Component({
  selector: 'app-pets-info',
  templateUrl: './pets.info.component.html',
  styleUrls: ['./pets.info.component.css']
})
export class PetInfoComponent extends AppBase {

  @ViewChild(AlertComponent, { static: true }) private alert: AlertComponent;
  
  constructor(session : SessionService/*, private cordova : CordovaService*/){
    super(session);
  }

  pet : Pet;
  age : string;
  carouselComponent : CarouselComponent;
  protected currentDate : Date;
  protected mask = DateUtils.mask;
  
  ngOnInit() {
    this.setDate();
  }

  private setDate() {

    const ping = this.session.authenticationService.infoService.doPing();
    ping.subscribe(result => {

      if(result.code == ReturnCode.SUCCESS) {
        this.currentDate = new Date(result.date);
      }
    });
  }

  protected updateAge() {

    if(this.pet.birthDate > this.currentDate){
      this.age = "";
      return;
    }

    if(!ObjectUtils.isEmpty(this.currentDate) && !ObjectUtils.isEmpty(this.pet.birthDate)) {

      const timeDiff = Math.abs(this.currentDate.getTime() - this.pet.birthDate.getTime());
      const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

      if(age > 0) {
        this.age = age + " " + (age > 1 ? this.language.years : this.language.year);
      }
      else {
        const age = Math.floor((timeDiff / (1000 * 3600 * 24))/30);
        if(age > 0){
          this.age = age + " " + (age > 1 ? this.language.months : this.language.month).replace("-", "");
        }
        else {
          const age = Math.floor((timeDiff / (1000 * 3600 * 24)));
          this.age = age + " " + (age > 1 ? this.language.days : this.language.day).replace("-", "");
        }
      }
    }
  }

  protected next() : void {

    //Campos obrigatorios
    if(!this.requiredFieldsFilled(this.pet)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      return;
    }

    this.carouselComponent.next();
  }

  protected back() : void {
    this.carouselComponent.back();
  }

  requiredFieldsFilled(pet: Pet) : boolean {
    return !(StringUtils.isEmpty(pet.name) || ObjectUtils.isEmpty(pet.birthDate) || ObjectUtils.isEmpty(pet.petType));
  }

}

//////////////////////////////////////


@Component({
  selector: 'app-pets-picture',
  templateUrl: './pets.picture.component.html'
})
export class PetPictureComponent extends AppBase {

  constructor(private phonegap : CordovaService, session : SessionService){
    super(session);
  }

  pet : Pet;
  carouselComponent : CarouselComponent;

  callback : any;
  
  ngOnInit() {
    this.title = this.language.takePicture;
  }

  protected camera() {

    if(this.loading){
      return;
    }

    let onCameraSuccess = (imageURL) => {
      console.log(imageURL);
      this.pet.img = imageURL;
      if(this.phonegap.isBrowser){
        //this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
        this.pet.img = "assets/img/rottweiler-sample.jpg";
      }
    }
      
    let onCameraFail = (message) => {
      alert('Failed because: ' + message);
    }

    if(!this.phonegap.isBrowser && !ObjectUtils.isEmpty(this.phonegap.window.navigator.camera)){
      const cameraOptions = {
        quality: 100,
        destinationType: this.phonegap.Camera.DestinationType.FILE_URI,
        sourceType: this.phonegap.Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: this.phonegap.Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false
      };
      this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, cameraOptions);
    }
    else {
      onCameraSuccess(undefined);
    }
  }

  protected submit() {
    if(this.loading){
      return;
    }
    this.loading = true;
    if(this.callback != undefined){
      this.callback(this.pet);
    }
  }
}

////////////////////////////////////////////////////

@Component({
  selector: 'app-pets-wizard',
  templateUrl: './pets.wizard.component.html'
})
export class PetsWizardComponent extends AppBase {

  @ViewChild(PetTypeComponent, { static: true }) private petTypeComponent : PetTypeComponent;
  @ViewChild(PetInfoComponent, { static: true }) private petInfoComponent : PetInfoComponent;
  @ViewChild(PetPictureComponent, { static: true }) private petPictureComponent : PetPictureComponent;
  @ViewChild(CarouselComponent, { static: true }) private carouselComponent : CarouselComponent;

  private pet : Pet;

  constructor(
    private api : PetApiService,
    private router : Router,
    private element : ElementRef,
    private activatedRoute: ActivatedRoute,
    @Inject(PetsComponent) private petsComponent: PetsComponent, session : SessionService){
      super(session);
  }

  ngOnInit() {

    this.loading = true;
    this.menu.disable = false;
    this.menu.disableMenu = false;
    this.pet = this.session.getEditingPet();
    if(ObjectUtils.isEmpty(this.pet)){
      this.pet = new Pet();
      this.pet.petType = new PetType();
      this.pet.breed = new Breed();
    }
    this.petInfoComponent.pet = this.pet;
    this.petPictureComponent.pet = this.pet;
    this.petTypeComponent.pet = this.pet;
    this.petPictureComponent.callback = this.save;
    this.petTypeComponent.carouselComponent = this.carouselComponent;
    this.petInfoComponent.carouselComponent = this.carouselComponent;
    this.petPictureComponent.carouselComponent = this.carouselComponent;
  }

  protected save = (pet : Pet) => {

    const pets = this.api.save(pet);
    pet.user = this.session.getCurrentUser();
    this.loading = true;
    this.element.nativeElement.hidden = this.loading;

    pets.subscribe(result => {
      console.log(result);
      this.loading = false;
      this.element.nativeElement.hidden = this.loading;

      if(result.data){
        if(result.code == ReturnCode.SUCCESS){
          if(result && result.sid) {
            this.session.zone.run(() => 
            //this.router.navigateByUrl(PETS_PAGE));
            this.router.navigate(['.'], { relativeTo: this.activatedRoute.parent }));
            this.petsComponent.loadPets();
          }
        }
      }
      
      if(result.code != ReturnCode.SUCCESS) {
        //this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
      }
    }, error => {
      this.loading = false;
      this.element.nativeElement.hidden = this.loading;
      console.log(error);
    });
  }
}

/////////////////////////////

