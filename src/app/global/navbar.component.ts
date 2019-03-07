import { Language } from './../language/Language';
import { User } from '../entity/User';
import { AppComponent, AppBase } from '../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase {

  appName : string = AppComponent.applicationName;
  
  constructor() { 
    super();
  }

  ngOnInit() {
    this.language = AppComponent.language;
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
