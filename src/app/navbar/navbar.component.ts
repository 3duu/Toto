import { AppBase } from './../appbase';
import { Component } from '@angular/core';
import { User } from '../entity/User';
import { LoginUtils } from '../utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase {
  
  disableMenu = false;
  disable = true;
  navbarOpen = false;
  user : User;

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateUser();
  }

  updateUser() {
    this.user = LoginUtils.getCurrentUser();
  }

  toggleNavbar() {
    this.updateUser();
    this.navbarOpen = !this.navbarOpen;
  }

}
