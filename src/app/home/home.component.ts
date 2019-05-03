import { MAPS_PAGE, PETS_PAGE } from './../application';
import { MenuService } from './../navbar/menuService';
import { Component, ViewChild } from '@angular/core';
import { AppBase } from '../appbase';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase {

  constructor(private router: Router, private menuService : MenuService) {
    super();
  }

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  ngOnInit() {
    this.enableMenu();
  }

  private enableMenu() : void {
    this.menu.disableMenu = false;
    this.menu.disable = false;
  }

  maps(): void {
    this.router.navigateByUrl(MAPS_PAGE);
  }

  appointments(): void {
    alert("Agenda");
  }

  pets(): void {
    this.router.navigateByUrl(PETS_PAGE);
  }

  donations(): void {
    alert("Doações");
  }

}
