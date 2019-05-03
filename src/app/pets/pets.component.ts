import { AppBase } from './../appbase';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PetApiService, ReturnCode } from '../service/services';
import { User } from '../entity/User';
import { Pet, PetType } from '../entity/Pet';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory, DialogRef } from 'ngx-modialog';
import { StringUtils, ObjectUtils } from '../utils';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { CordovaService } from '../cordova.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from './../navbar/menuService';

declare let Camera;

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase implements AfterViewInit {

  constructor(private api : PetApiService, private modal: Modal, private menuService : MenuService) {
    super();
  }

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  private user : User;
  private title : string = "Pets";
  private dialog : boolean = false;
  static dialogRef : DialogRef<any>;

  ngOnInit() {
    this.loading = true;
    this.user = this.menu.user;
  }

  ngAfterViewInit(): void {
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
  private openAddDialog() : void {
    this.dialog = true;
    const dialogRef = this.modal
      .open(EditPetsComponent, overlayConfigFactory({ isBlocking: false }, BSModalContext));
    console.log(dialogRef);
    console.log(this.modal);
    // dialogRef.result
    //   .then( result => this.save(result) );

    dialogRef.onDestroy.subscribe(() => {
      this.dialog = false;
    });

    PetsComponent.dialogRef = dialogRef;
  }

  protected add() : void {
    setTimeout(() => {this.openAddDialog()});
  }

}

///////////////////////////

@Component({
  selector: 'app-add-pets',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class EditPetsComponent extends AppBase implements AfterViewInit {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  private pet : Pet;
  private dialog : boolean = false;
  static dialogRef : DialogRef<any>;
  animal : Animal = new Animal(PetType.OTHER);

  cameraOptions : any;
  
  constructor(private api : PetApiService, private modal: Modal, private phonegap : CordovaService){
    super();
  }
  
  ngOnInit() {
    this.pet = new Pet();
    this.animal.name = this.language.animal;

    this.cameraOptions = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    };
  }

  ngAfterViewInit(): void {
    
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
              this.closeDialog();
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

  private closeDialog() : void {
    PetsComponent.dialogRef.close();
  }

  selectAnimal(selected : number) : void {
    this.pet.petType = selected;
    console.log(this.pet.petType);
  }

  requiredFieldsFilled(pet: Pet) : boolean {
    console.log(pet);
    return !(StringUtils.isEmpty(pet.name)
      || ObjectUtils.isEmpty(pet.age)
      || ObjectUtils.isEmpty(pet.petType));
  }

  private openPetDialog() : void {

    this.dialog = true;
    const dialogRef = this.modal
      .open(PetPickerComponent, overlayConfigFactory({ isBlocking: false }, BSModalContext));
    
    dialogRef.onDestroy.subscribe(() => {
      this.dialog = false;
    });
    /*
    const dialogRef = this.modal.confirm()
        .size('lg')
        .showClose(true)
        .title(this.language.animal)
        .body(`
          <div class="container text-center">
            <p>
                <a *ngFor="let item of animals; let i= index ;trackBy: trackByFn" class="btn btn-petlife social-login-btn pet-icon" (click)="select(item)" href="#"><i class="fa fa-{{item.icon}}"></i></a>
            </p>
          </div> 
      `)
        .open();

    dialogRef.result
        .then( result => alert(`The result is: ${result}`) );*/

    EditPetsComponent.dialogRef = dialogRef;
  }

  protected add() : void {
    setTimeout(() => { this.openPetDialog() });
  }

  private browserPicture : any;

  protected camera() : void {
    /*this.phone.window.navigator.camera.getPicture(onSuccess, onFail, { quality: 70,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });*/

    let onCameraSuccess = (imageURL) => {
      console.log(imageURL);
      this.pet.img = imageURL;
      if(this.phonegap.isBrowser){
        this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
      }
    }
      
    let onCameraFail = (message) => {
      alert('Failed because: ' + message);
    }

    this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, this.cameraOptions);
  }

}

//////////////////////////////////////

@Component({
  selector: 'app-add-pets',
  templateUrl: './pet.picker.component.html',
  styleUrls: ['./pet.picker.component.css']
})
export class PetPickerComponent extends AppBase implements AfterViewInit {

  private animals : Animal[] = [];
  
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

  ngAfterViewInit(): void {
    
  }
  
  select(selected : Animal) : void {
    //this.pet.petType = selected;
    console.log(selected);
    EditPetsComponent.dialogRef

    this.closeDialog();
  }

  private closeDialog() : void {
    EditPetsComponent.dialogRef.close();
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
