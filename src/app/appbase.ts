import { OnInit, Type } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { Language } from './language/Language';
import { User } from './entity/User';
import { SessionAttributes, ObjectUtils } from './utils';
import { HOME_PAGE } from './application';

export class AppBase implements OnInit {
  
    lastComponent :Type<any>;
  
    applicationName : string = AppComponent.applicationName;
    language : Language = AppComponent.language;

    protected loading = false;
  
    constructor(){
      if((<any>window).components == undefined){
        (<any>window).components = [];
      }
      (<any>window).components.push(this);
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
    
    protected getNavbarComponent() : NavbarComponent {
      return AppComponent.menu;
    }

    protected getAppComponent() : AppComponent {
      return AppComponent.getAppComponent();
    }
  
    onLogged(afterLoginRedirectComponent: Type<any>) : void {
      if(ObjectUtils.isEmpty(afterLoginRedirectComponent)){
        afterLoginRedirectComponent = HOME_PAGE;
      }
      let user : User = this.getUser();
      if(user != null){
        this.getNavbarComponent().user = user;
        this.getAppComponent().changePage(afterLoginRedirectComponent);
      }
    }

    protected changeCurrentPage(current: any, page: Type<any>) : void {
      setTimeout(() => {
        let newPage = this.getAppComponent().changeCurrentPage(current, page);
        newPage.lastComponent = current.constructor;
      });
    }
    
    goBack(lastComponent : any) : void {
      this.getAppComponent().changeCurrentPage(this, lastComponent);
    }
    
  }