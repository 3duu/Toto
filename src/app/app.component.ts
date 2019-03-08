import { Language } from './language/Language';
import { Component, OnInit } from '@angular/core';
import { User } from './entity/User';
import { NavbarComponent } from './global/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  static applicationName : string = "PetLif3";
  static language : Language = new Language();
 

  title = 'angular';
}

export class AppBase implements OnInit {
  
  private user : User;
  private showNavMenu : boolean;

  applicationName : string = AppComponent.applicationName;
  language : Language = AppComponent.language;
  navbarComponent : NavbarComponent;

  private static modules = [];

  ngOnInit(): void {
    
  }

  getUser() : User {
    return this.user;
  }

  setNavMenuVisiility() : boolean {
    return this.showNavMenu;
  }

  getNavbarComponent() : NavbarComponent {
    return null;
  }

  setNavbarComponent(navbarComponent : NavbarComponent) : void {
    AppBase.modules.push(navbarComponent);
    this.navbarComponent = navbarComponent;
  }
  
}
