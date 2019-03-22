import { OnInit, Type } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { Language } from './language/Language';
import { User } from './entity/User';
import { SessionAttributes } from './login/login.component';
import { HomeComponent } from './home/home.component';

export class AppBase implements OnInit {
  
    private static modules : AppBase[] = [];
    private static navbarComponent : NavbarComponent;
  
    showNavMenu : boolean = true;
  
    applicationName : string = AppComponent.applicationName;
    language : Language = AppComponent.language;

    private children = [];
  
    constructor(){
      AppBase.addModule(this);
    }
  
    ngOnInit(): void {
      
    }
  
    protected getUser() : User {
      let json = localStorage.getItem(SessionAttributes.CURRENT_USER) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.CURRENT_USER)) : null;
      if(json != null){
        let user : User = new User();
        user.setId(json.id);
        user.setName(json.name);
        user.setPassword(json.password);
        user.setUsername(json.username);
        user.setCreationDate(json.creationDate);
        user.setAdmin(json.admin);
        user.setPets(json.pets);
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
      (<any>window).user = user;
      if(user != null){
        this.getNavbarComponent().username = user.getName();
        if(afterLoginRedirectComponent != null){
          this.getAppComponent().changePage(afterLoginRedirectComponent);
        }
        else{
          this.getAppComponent().changePage(HomeComponent);
        }
      }
    }

    setError(message : string) : void {

    }
    
  }