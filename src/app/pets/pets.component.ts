import { PETS_WIZARD_DEF_PAGE, PETS_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, ViewChild } from '@angular/core';
import { PetApiService } from '../service/services';
import { User } from '../entity/User';
import { Pet, PetType } from '../entity/Pet';
import { StringUtils, ObjectUtils } from '../utils';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { CordovaService } from '../cordova.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from './../navbar/menuService';
import { ReturnCode } from '../entity/system';
import { Router, ActivatedRoute } from '@angular/router';

declare const Camera;

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase {

  constructor(private api : PetApiService, 
    private menuService : MenuService,
    private session : SessionService,
    private router : Router,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  private user : User;
  private title : string = "Pets";
  private dialog : boolean = false;

  ngOnInit() {
    this.loading = true;
    this.user = this.menu.user;
    this.menu.disable = false;
    this.menu.disableMenu = false;
    this.loadPets();
  }

  private loadPets() : void {
    if(this.user != null && this.user != undefined){
      const pets = this.api.getByUser(this.user);
      this.user.pets = [];

      pets.subscribe(result => {
        console.log(result);
        
        //this.user.pets = result;
        this.loading = false;

        if(result.entity){

          result.entity.forEach(p => {
            let pet : Pet = new Pet();
            pet.id = p.id;
            pet.name = p.name;
            //pet.age = p.birthDate;
            pet.user = this.user;
            pet.appointments = [];
            this.user.pets.push(pet);
          });

          if(result.code == ReturnCode.SUCCESS){
            if (result && result.sid) {
              
            }
          }

        }

        if(result.code != ReturnCode.SUCCESS) {
          alert(this.api.getErrorMessage(result, this.language));
        }
      } ,error => {
        console.log(error);
        alert(error);
        this.loading = false;
      });
    }
  }

  protected view(pet : Pet) : void {
    alert("Visualizar");
  }

  public save(pet : Pet) : void {
    alert("Salvar");
  }

  //https://mdbootstrap.com/docs/angular/modals/basic/
  protected add() : void {
    (<any>window).activatedRoute = this.router;
    //this.router.navigateByUrl(this.router.url + "/" + PETS_WIZARD_DEF_PAGE);
    this.session.zone.run(() => this.router.navigate([PETS_WIZARD_DEF_PAGE], {replaceUrl: true, relativeTo: this.activatedRoute, queryParams: {id: ""}}));
    //, {replaceUrl: true, relativeTo: this.activatedRoute, queryParams: {id: ""}}
  }
}

///////////////////////////

@Component({
  selector: 'app-pet-info-wizard',
  templateUrl: './pet.info.wizard.component.html',
  styleUrls: ['./pet.wizard.component.css']
})
export class PetInfoComponent extends AppBase {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  private pet : Pet;
  animal : Animal = new Animal(PetType.OTHER);
  
  constructor(private api : PetApiService, private session : SessionService, private router : Router){
    super();
  }
  
  ngOnInit() {
    this.pet = new Pet();
    this.animal.name = this.language.animal;
  }

  openPetType() {
    this.add();
  }

  protected createPet() : void {

    this.loading = true;

    //Campos obrigatorios
    if(!this.requiredFieldsFilled(this.pet)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      this.loading = false;
      return;
    }

    const pets = this.api.save(this.pet);

      pets.subscribe(result => {
        console.log(result);

        this.loading = false;

        if(result.entity){
          if(result.code == ReturnCode.SUCCESS){
            if(result && result.sid) {
              //SAVED
            }
          }
        }

        if(result.code != ReturnCode.SUCCESS) {
          this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
        }
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  selectAnimal(selected : number) : void {
    this.pet.petType = selected;
    console.log(this.pet.petType);
  }

  requiredFieldsFilled(pet: Pet) : boolean {
    console.log(pet);
    return !(StringUtils.isEmpty(pet.name) || ObjectUtils.isEmpty(pet.age) || ObjectUtils.isEmpty(pet.petType));
  }

  protected add() : void {
    //setTimeout(() => { this.openPetDialog() });
  }

}

//////////////////////////////////////

@Component({
  selector: 'app-define-pets',
  templateUrl: './pet.picker.component.html'
})
export class PetPickerComponent extends AppBase {

  private animals : Animal[] = [];

  constructor(private session : SessionService, private router : Router) {
    super();
  }
  
  ngOnInit() {
    //this.animals = Object.keys(PetType).map(k => PetType[k as any]);
    Object.keys(PetType).map(k => PetType[k as any]).forEach( attr => {
      const animal = new Animal(PetType[attr]);
      if(!ObjectUtils.isEmpty(animal.id) && animal.id != 0){
        this.animals.push(animal);
      }
    });
    this.animals.push(new Animal(PetType.OTHER));
  }
  
  select(selected : Animal) : void {
    //this.pet.petType = selected;
    console.log(selected);
    //PetInfoComponent.dialogRef

    this.closeDialog();
  }

  private closeDialog() : void {
    //PetInfoComponent.dialogRef.close();
  }

}

///////////////////////////

export class Animal {

  id : number;
  name : string;
  icon : string;

  constructor(petType : PetType) {
    if(petType == PetType.OTHER){
      this.id = 0;
      this.name = "Outro";
      this.icon = "paw";
    }
    else if(petType == PetType.DOG){
      this.id = 1;
      this.name = "Cachorro";
      this.icon = "dog";
    }
    else if(petType == PetType.CAT){
      this.id = 2;
      this.name = "Gato";
      this.icon = "cat";
    }
    else if(petType == PetType.BIRD){
      this.id = 3;
      this.name = "Pássaro";
      this.icon = "dove";
    }
    else if(petType == PetType.FISH){
      this.id = 4;
      this.name = "Peixe";
      this.icon = "fish";
    }
  }
}

//////////////////////////////////////

@Component({
  selector: 'app-pet-picture',
  templateUrl: './pet.picture.component.html'
})
export class PetPictureComponent extends AppBase {

  constructor(private phonegap : CordovaService){
    super();
  }
  
  ngOnInit() {
    alert("fewf");
  }

  protected camera() : void {
    /*this.phone.window.navigator.camera.getPicture(onSuccess, onFail, { quality: 70,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });*/

    let onCameraSuccess = (imageURL) => {
      console.log(imageURL);
      //this.pet.img = imageURL;
      if(this.phonegap.isBrowser){
        //this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
      }
    }
      
    let onCameraFail = (message) => {
      alert('Failed because: ' + message);
    }

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
}

