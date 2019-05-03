import { PetsComponent } from './../pets/pets.component';
import { MapsComponent } from './../maps/maps.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AppBase } from '../appbase';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase implements AfterViewInit {

  constructor() {
    super();
  }

  @ViewChild(NavbarComponent) private menu: NavbarComponent;

  ngOnInit() {
    this.enableMenu();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.enableMenu()});
  }

  private enableMenu() : void {
    this.menu.disableMenu = false;
    this.menu.disable = false;
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
