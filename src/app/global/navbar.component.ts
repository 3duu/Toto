import { Language } from './../language/Language';
import { Component, OnInit } from '@angular/core';
import { User } from '../entity/User';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user : User;
  language : Language;
  appName : string = AppComponent.applicationName;
  
  constructor() { 
    this.user = new User();
  }

  ngOnInit() {
    this.language = AppComponent.language;
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
