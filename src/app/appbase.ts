import { OnInit, Type } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { Language } from './language/Language';
import { User } from './entity/User';
import { SessionAttributes } from './utils';
import { HOME_PAGE } from './application';

export class AppBase implements OnInit {
  
    private static modules : AppBase[] = [];
    private static navbarComponent : NavbarComponent;
    lastComponent :Type<any>;
  
    showNavMenu : boolean = true;
  
    applicationName : string = AppComponent.applicationName;
    language : Language = AppComponent.language;

    protected loading = false;
  
    constructor(){
      AppBase.addModule(this);
    }
  
    ngOnInit(): void {
      
    }
  
    protected getUser() : User {
      let json = localStorage.getItem(SessionAttributes.CURRENT_USER) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.CURRENT_USER)) : null;
      if(json != null){
        let user : User = new User();
        user.id = json.id;
        user.name= json.name;
        user.password = json.password;
        user.username = json.username;
        user.creationDate = json.creationDate;
        user.admin = json.admin;
        user.pets = json.pets;
        return user;
      }
      return json;
    }

    protected getSessionId() : string {
        return localStorage.getItem(SessionAttributes.SESSION_ID) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.SESSION_ID)) : null;
    }
    
    getNavbarComponent() : NavbarComponent {
      return AppBase.navbarComponent;
    }

    protected getAppComponent() : AppComponent {
      return AppComponent.getAppComponent();
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
  
    onLogged(afterLoginRedirectComponent: Type<any>) : void {
      let user : User = this.getUser();
      //(<any>window).user = user;
      if(user != null){
        this.getNavbarComponent().username = user.name;
        if(afterLoginRedirectComponent != null){
          setTimeout(() => {this.getAppComponent().changePage(afterLoginRedirectComponent)});
        }
        else{
          setTimeout(() => {this.getAppComponent().changePage(HOME_PAGE)});
        }
      }
    }

    public changeCurrentPage(current: any, page: Type<any>) : void {
      let newPage = this.getAppComponent().changeCurrentPage(current, page);
      newPage.lastComponent = current.constructor;
    }
    
    goBack(lastComponent : any) : void {
      this.getAppComponent().changeCurrentPage(this, lastComponent);
    }
    
  }