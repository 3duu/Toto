import { WELCOME_PAGE } from './application';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuService } from './navbar/menuService';
import { environment } from '../environments/environment';
import { SessionService } from './session/session.service';
import { Router } from '@angular/router';
import { ReturnCode } from './entity/system';

//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  //static language : Language = new Language();
  // Keep track of list of generated components for removal purposes
  @ViewChild(NavbarComponent) private menu : NavbarComponent;

  constructor(private router : Router, private session : SessionService, private menuService : MenuService) {
  
  }

  ngOnInit(): void {
    this.startApp();
  }

  login = (args) => {
    if(args.code == ReturnCode.SUCCESS){
      this.session.onLogged(null, this.router, this.menu);
    }
    else {
      this.session.zone.run(() => this.router.navigateByUrl(WELCOME_PAGE));
    }
  }

  private startApp() : void {
    //Erase session values
    this.session.resetSession();
    this.menuService.menu = this.menu;
    if(this.router.url == "/"){
      this.session.authenticationService.authenticateLastUser(this.login, this.session.setUserInSession);
    }
    else {
      this.login({code : ReturnCode.NOT_FOUND});
    }
  }

  title = environment.name;

}
