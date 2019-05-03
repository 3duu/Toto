import { OnInit, Type } from '@angular/core';
import { Language } from './language/Language';
import { User } from './entity/User';
import { SessionAttributes, ObjectUtils } from './utils';
//import { HOME_PAGE } from './application';

export class AppBase implements OnInit /** AfterContentInit */ {
  
    lastComponent :Type<any>;
  
    applicationName : string = "TOPPET";// environment.name;
    language : Language = new Language();// AppComponent.language;
    
    protected loading = false;
  
    constructor(){
      if((<any>window).components == undefined){
        (<any>window).components = [];
      }
      (<any>window).components.push(this);
    }
  
    ngOnInit(): void {
      
    }
  
    protected getSessionId() : string {
        return localStorage.getItem(SessionAttributes.SESSION_ID) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.SESSION_ID)) : null;
    }
  
    protected changeCurrentPage(current: any, page: Type<any>) : void {
      setTimeout(() => {
        //let newPage = this.getAppComponent().changeCurrentPage(current, page);
        //newPage.lastComponent = current.constructor;
      });
    }
    
    goBack(lastComponent : any) : void {
      //this.getAppComponent().changeCurrentPage(this, lastComponent);
    }
    
  }