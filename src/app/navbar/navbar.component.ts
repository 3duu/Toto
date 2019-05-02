import { Component } from '@angular/core';
import { AppBase } from '../appbase';
import { User } from '../entity/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase {
  
  constructor() {
    super();
  }

  disableMenu = false;
  disable = true;
  navbarOpen = false;
  user : User;

  ngOnInit() {
    //this.user = super.getUser();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
