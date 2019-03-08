import { SQLite } from './database/database';
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

  private sqlite : SQLite = new SQLite();

  static applicationName : string = "PetLif3";
  static language : Language = new Language();
  
  constructor() {
		this.sqlite.prepare();
	}

  title = 'angular';
}

export class AppBase implements OnInit {
  
  private user : User;
  private showNavMenu : boolean;

  applicationName : string = AppComponent.applicationName;
  language : Language = AppComponent.language;

  private static modules : AppBase[] = [];
  static navbarComponent : NavbarComponent;

  ngOnInit(): void {
    
  }

  getUser() : User {
    return this.user;
  }

  setNavMenuVisiility() : boolean {
    return this.showNavMenu;
  }
  
  getNavbarComponent() /*: NavbarComponent*/ {
    for(let m in AppBase.modules){
      if('NavbarComponent' == m.constructor.name){
        return m;
      }
    }
    return null;
  }

  protected static setNavbarComponent(navbarComponent : NavbarComponent) : void {
    if(this.navbarComponent == null){
      AppBase.addModule(navbarComponent);
      this.navbarComponent = navbarComponent;
    }
  }

  protected static addModule(module : AppBase) : void {
    for(let m in AppBase.modules){
      if(module.constructor.name == m.constructor.name){
        return;
      }
    }
    AppBase.modules.push(module);
  }
  
}
