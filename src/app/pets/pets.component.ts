import { AppBase } from './../appbase';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PetApiService, ReturnCode } from '../service/services';
import { User } from '../entity/User';
import { ColorClass } from '../styles/styles';
import { Pet } from '../entity/Pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent extends AppBase implements AfterViewInit {

  //plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
  constructor(private api : PetApiService) {
    super();
  }

  private user : User;

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
    
      pets.subscribe(result => {
        console.log(result);
        this.user.pets = [];
        //this.user.pets = result;
        this.loading = false;

        result.forEach(p => {
          let pet : Pet = new Pet();
          pet.id = p.id;
          pet.name = p.name;
          pet.birthDate = p.birthDate;
          pet.user = this.user;
          pet.appointments = [];
          this.user.pets.push(pet);
        });
  
        if(result.code == ReturnCode.SUCCESS){
          if (result && result.sid) {
            
          }
        }
        else {
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

  view(pet : Pet) : void {
    alert("Visualizar");
  }

}
