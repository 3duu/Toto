import { AppBase } from './../appbase';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PetApiService, ReturnCode } from '../service/services';
import { User } from '../entity/User';
import { Pet, PetType } from '../entity/Pet';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { StringUtils } from '../utils';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';

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
  private addDialog : any;

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

        this.user.pets = [];
        let pet1 : Pet = new Pet();
        pet1.id = 1;
        pet1.name = 'Thanos';
        pet1.img = 'https://cachorrosincriveis.com.br/wp-content/uploads/2018/07/filhote-de-rottweiler-1-696x464.jpg';
        this.user.pets.push(pet1);

        let pet2 : Pet = new Pet();
        pet2.id = 2;
        pet2.name = 'Fenrir';
        pet2.img = 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Le%C3%AFko_au_bois_de_la_Cambre.jpg/640px-Le%C3%AFko_au_bois_de_la_Cambre.jpg';
        this.user.pets.push(pet2);
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
    const dialogRef = this.modal
      .open(AddPetsComponent, overlayConfigFactory({ isBlocking: false }, BSModalContext));
    console.log(dialogRef);
    console.log(this.modal);
    this.addDialog = dialogRef;
    // dialogRef.result
    //   .then( result => this.save(result) );
  }

  protected add() : void {
    setTimeout(() => {this.openAddDialog()});
  }

}

@Component({
  selector: 'app-add-pets',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPetsComponent extends AppBase implements AfterViewInit {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  private dropdownOpen : boolean = false;
  private pet : Pet;
  private animals : Animal[] = [];
  private petTypes = PetType;

  constructor(private api : PetApiService){
    super();
  }
  
  ngOnInit() {
    this.pet = new Pet();
    //this.petTypes = Object.keys(PetType).map(k => PetType[k as any]);
  }

  ngAfterViewInit(): void {
    // <a class="dropdown-item" href="#">Action</a>
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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
        
        //this.user.pets = result;
        this.loading = false;

        if(result.entity){

          if(result.code == ReturnCode.SUCCESS){
            if (result && result.sid) {
              
            }
          }
        }

        if(result.code != ReturnCode.SUCCESS) {
          alert(this.api.getErrorMessage(result, this.language));
        }
      } ,error => {
        this.loading = false;
        console.log(error);
      });
  }

  requiredFieldsFilled(pet: Pet) : boolean {
    console.log(pet);
    return !(StringUtils.isEmpty(pet.name)
    || (pet.age == null || pet.age == undefined)
    /*|| (pet.petType == null || pet.petType == undefined)*/);
  }
}

export class Animal {

  constructor(private petType : PetType){

  }

  public get text(): string {
      let values = Object.keys(PetType).map(k => PetType[k as any]);
      values.forEach(attr => {
        if(attr == this.petType){
          return attr;
        }
      });
      return this.petType;
  }

  public get value(): number {
    let index = 0;
    let values = Object.keys(PetType).map(k => PetType[k as any]);
    values.forEach(attr => {
      if(attr == this.petType){
        return index;
      }
      index++;
    });
    return index;
  }
}
