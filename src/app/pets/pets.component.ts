import { AppBase } from './../appbase';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PetApiService } from '../service/services';
import { User } from '../entity/User';

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
    this.user = super.getUser();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.loadPets()});
  }

  private loadPets() : void {
    if(this.user != null && this.user != undefined){

    }
  }

}
