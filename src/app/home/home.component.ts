import { PetsComponent } from './../pets/pets.component';
import { MapsComponent } from './../maps/maps.component';
import { Component, AfterViewInit } from '@angular/core';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase implements AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.enableMenu();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.enableMenu()});
  }

  private enableMenu() : void {
    this.getNavbarComponent().disableMenu = false;
  }

  maps(): void {
    super.changeCurrentPage(this, MapsComponent);
  }

  appointments(): void {
    alert("Agenda");
  }

  pets(): void {
    super.changeCurrentPage(this, PetsComponent);
  }

  donations(): void {
    alert("Doações");
  }

}
