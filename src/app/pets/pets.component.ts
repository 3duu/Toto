import { Breed } from './../entity/Pet';
import { PETS_WIZARD_PAGE, APPOINTMENTS_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { PetApiService } from '../service/services';
import { User } from '../entity/User';
import { Pet, PetType } from '../entity/Pet';
import { StringUtils, ObjectUtils, DateUtils } from '../utils';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { CordovaService } from '../cordova.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from './../navbar/menuService';
import { ReturnCode } from '../entity/system';
import { Router, ActivatedRoute } from '@angular/router';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory, DialogRef } from 'ngx-modialog';
//import { writeFile } from 'fs';

declare const Camera;

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase {

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }
  
  private user : User;
  private _pets : Pet[];

  constructor(private api : PetApiService, 
    private menuService : MenuService,
    private session : SessionService,
    private router : Router,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  get pets() : Pet[] {
    return this._pets;
  }

  ngOnInit() {
    this.menu.disable = false;
    this.menu.disableMenu = false;
    this.title = this.language.myPet;
    this.setTitle(this.menuService);
    this.user = this.session.getCurrentUser();
    this.setPets();  
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
        
        //this.user.pets = result;
        this.loading = false;

        if(result.code == ReturnCode.SUCCESS){
          if (result && result.sid) {
            if(result.entity){
              this.user.pets = result.entity;
              //this.setPets();
            }
          }
        }
        else  {
          //alert(this.api.getErrorMessage(result, this.language));
        }
      }, error => {
        console.error(error);
        this.loading = false;
      });
    }
  }

  protected view(pet : Pet) : void {
    this.router.navigateByUrl(APPOINTMENTS_PAGE);
  }

  //https://mdbootstrap.com/docs/angular/modals/basic/
  protected add() : void {
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

  private dialog : boolean = false;
  
  types : PetType[] = [];
  pet : Pet;
  nextInput : ElementRef;
  previousInput : ElementRef;

  constructor(private api : PetApiService, 
    private modal: Modal) {
    super();
  }
  
  ngOnInit() {

    this.loading = true;

    const response = this.api.getAllPetTypes();
    
    response.subscribe(result => {

      console.log(result);
      
      this.loading = false;
      if(result.code == ReturnCode.SUCCESS){

        if (result && result.sid) {
          if(result.entity){
            this.types = result.entity;
          }
        }
      }
      else {
        //alert(this.api.getErrorMessage(result, this.language));
      }
    } ,error => {
      console.log(error);
      this.loading = false;
    });
  }
  
  select(selected : PetType) : void {

    if(selected.breeds != undefined && selected.breeds.length > 0){
      
      this.dialog = true;
      const dialogRef = this.modal
        .open(BreedPickerComponent, overlayConfigFactory({ isBlocking: false , data : {type : selected} }, BSModalContext));

      dialogRef.result
        .then( res => {
          if(!ObjectUtils.isEmpty(res) &&  res.result)
            this.selectPetType(selected, res.breed)
          });

      dialogRef.onDestroy.subscribe(() => {
        this.dialog = false;
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
    this.nextInput.nativeElement.click();
  }

}

///////////////////////////////////////////////

@Component({
  selector: 'app-pets-breeds',
  templateUrl: './pets.breeds.component.html',
  styleUrls: ["./pets.picker.component.css"]
})
export class BreedPickerComponent extends AppBase {

  private type : PetType;

  constructor(private dialogRef : DialogRef<any>, private menuService : MenuService, private element : ElementRef) {
    super();
    const data = this.dialogRef.context.data;
    if(data != undefined){
      this.type = data.type;
    }
  }
  
  ngOnInit() {
    const modalBody = this.element.nativeElement.children[0].children[0].children[1];
    modalBody.style.overflowY = "auto";
    modalBody.style.overflowX = "hidden";
    const maxHeight = ((window.innerHeight - 30) + "px");
    modalBody.style.maxHeight = maxHeight;
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

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private session : SessionService){
    super();
  }

  pet : Pet;
  age : string;
  nextInput : ElementRef;
  previousInput : ElementRef;
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

    this.nextInput.nativeElement.click();
  }

  protected back() : void {
    this.previousInput.nativeElement.click();
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

  constructor(private phonegap : CordovaService){
    super();
  }

  pet : Pet;
  nextInput : ElementRef;
  previousInput : ElementRef;

  callback : any;
  
  ngOnInit() {
    this.title = this.language.takePicture;
  }

  protected camera() : void {
    /*this.phone.window.navigator.camera.getPicture(onSuccess, onFail, { quality: 70,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });*/

    let onCameraSuccess = (imageURL) => {
      console.log(imageURL);
      this.pet.img = imageURL;
      if(this.phonegap.isBrowser){
        //this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
        this.pet.img = "assets/img/rottweiler-sample.jpg";
      }
      //this.saveImage(imageURL);
      if(this.callback != undefined){
        this.callback(this.pet);
      }
    }
      
    let onCameraFail = (message) => {
      alert('Failed because: ' + message);
    }

    if(!this.phonegap.isBrowser && !ObjectUtils.isEmpty(this.phonegap.window.navigator.camera)){
      const cameraOptions = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false
      };
      this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, cameraOptions);
    }
    else {
      onCameraSuccess(undefined);
    }
  }

}

////////////////////////////////////////////////////

@Component({
  selector: 'app-pets-wizard',
  templateUrl: './pets.wizard.component.html'
})
export class PetsWizardComponent extends AppBase {

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  @ViewChild(PetTypeComponent) private petTypeComponent : PetTypeComponent;
  @ViewChild(PetInfoComponent) private petInfoComponent : PetInfoComponent;
  @ViewChild(PetPictureComponent) private petPictureComponent : PetPictureComponent;
  @ViewChild("nextInput") private nextInput;
  @ViewChild("previousInput") private previousInput;

  private pet : Pet;

  constructor(private menuService : MenuService,
    private session : SessionService,
    private api : PetApiService,
    private router : Router,
    private element : ElementRef,
    private activatedRoute: ActivatedRoute,
    @Inject(PetsComponent) private petsComponent: PetsComponent) {
    super();
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
    this.petInfoComponent.nextInput = this.nextInput;
    this.petPictureComponent.nextInput = this.nextInput;
    this.petTypeComponent.nextInput = this.nextInput;
    this.petInfoComponent.previousInput = this.previousInput;
    this.petPictureComponent.previousInput = this.previousInput;
    this.petTypeComponent.previousInput = this.previousInput;
    (<any>window).nextInput = this.nextInput;
    this.petPictureComponent.callback = this.save;
    console.log(this.petsComponent);
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

      if(result.entity){
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

