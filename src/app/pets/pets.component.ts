import { Breed } from './../entity/Pet';
import { PETS_WIZARD_DEF_PAGE } from './../application';
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
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory, DialogRef } from 'ngx-modialog';

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
  private active : boolean = true;

  ngOnInit() {
    this.loading = true;
    this.user = this.session.getCurrentUser();
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

        if(result.code == ReturnCode.SUCCESS){
          if (result && result.sid) {
            if(result.entity){
              this.user.pets = result.entity;
            }
          }
        }
        else  {
          //alert(this.api.getErrorMessage(result, this.language));
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

  //https://mdbootstrap.com/docs/angular/modals/basic/
  protected add() : void {
    this.session.zone.run(() => 
      this.router.navigate([PETS_WIZARD_DEF_PAGE], {replaceUrl: true, relativeTo: this.activatedRoute, queryParams: {id: ""}}).then(res =>{
        this.active = false;
    }));
  }
}

///////////////////////////

@Component({
  selector: 'app-define-pets',
  templateUrl: './pet.type.component.html',
  styleUrls: ["./pet.picker.component.css"]
})
export class PetTypeComponent extends AppBase {

  private animals : PetType[] = [];
  private dialog : boolean = false;

  constructor(private router : Router, private api : PetApiService, private modal: Modal) {
    super();
  }
  
  ngOnInit() {

    this.loading = true;
    const types = this.api.getAllPetTypes();

    types.subscribe(result => {

      console.log(result);
      
      this.loading = false;
      if(result.code == ReturnCode.SUCCESS){
        if (result && result.sid) {
          if(result.entity){
            this.animals = result.entity;
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

    console.log(selected);

    if(selected.breeds != undefined && selected.breeds.length > 0){
      this.dialog = true;
      const dialogRef = this.modal
        .open(BreedPickerComponent, overlayConfigFactory({ isBlocking: false , data : {type : selected} }, BSModalContext));
      // dialogRef.result
      //   .then( result => this.save(result) );
      (<any>window).dialogRef = dialogRef;
      dialogRef.onDestroy.subscribe(() => {
        this.dialog = false;
      });
    }
  }

}

///////////////////////////////////////////////

@Component({
  selector: 'app-breeds',
  templateUrl: './pet.breeds.component.html',
  styleUrls: ["./pet.picker.component.css"]
})
export class BreedPickerComponent extends AppBase {

  private type : PetType;

  constructor(private dialogRef : DialogRef<any>) {
    super();
    const data = this.dialogRef.context.data;
    if(data != undefined){
      this.type = data.type;
    }
  }
  
  ngOnInit() {
    
  }
  
  select(selected : Breed) : void {
    console.log(selected);
    this.closeDialog();
  }

  private closeDialog() : void {
    this.dialogRef.close();
  }

}

///////////////////////////////////////////////

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet.info.component.html',
  styleUrls: ['./pet.picker.component.css']
})
export class PetInfoComponent extends AppBase {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  private pet : Pet;
  //animal : Animal = new Animal(new PetType());
  
  constructor(private api : PetApiService, private session : SessionService, private router : Router){
    super();
  }
  
  ngOnInit() {
    this.pet = new Pet();
    //this.animal.name = this.language.animal;
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

