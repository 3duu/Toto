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

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase implements AfterViewInit {

  constructor(private api : PetApiService, private modal: Modal) {
    super();
  }

  private user : User;
  private title : string = "Pets";
  private dialog : boolean = false;
  static dialogRef : DialogRef<any>;

  ngOnInit() {
    this.loading = true;
    this.user = super.getUser();
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
  private dropdownOpen : boolean = false;
  private pet : Pet;
  private animals = [];
  private dialog : boolean = false;
  static dialogRef : DialogRef<any>; 

  constructor(private api : PetApiService, private modal: Modal, private phone : CordovaService){
    super();
  }
  
  ngOnInit() {
    this.pet = new Pet();
    this.animals = Object.keys(PetType).map(k => PetType[k as any]);
  }

  ngAfterViewInit(): void {
    
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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
    /*let index = 0;
    Object.keys(PetType).forEach(attr => {
      if(index == selected)
        return;
      this.pet.petType = PetType[attr];
      index++;
    });*/
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
    EditPetsComponent.dialogRef = dialogRef;
  }

  protected add() : void {
    setTimeout(() => {this.openPetDialog()});
  }

  protected camera() : void {
    this.phone.cordova.camera.getPicture();
  }
}

//////////////////////////////////////

@Component({
  selector: 'app-add-pets',
  templateUrl: './pet.picker.component.html',
  styleUrls: ['./pet.picker.component.css']
})
export class PetPickerComponent extends AppBase implements AfterViewInit {

  private animals = [];
  
  ngOnInit() {
    this.animals = Object.keys(PetType).map(k => PetType[k as any]);
  }

  ngAfterViewInit(): void {
    
  }
  
  select(selected : number) : void {
    //this.pet.petType = selected;
    console.log(selected);
    this.closeDialog();
  }

  private closeDialog() : void {
    EditPetsComponent.dialogRef.close();
  }

}
