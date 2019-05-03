import { OnInit } from '@angular/core';
import { LanguageService } from './language/Language';
import { SessionAttributes } from './utils';

//https://malcoded.com/posts/why-angular-not-works/
export class AppBase implements OnInit /** AfterContentInit */ {
  
    protected applicationName : string = "TOPPET";// environment.name;
    protected loading = false;

    protected language : LanguageService = new LanguageService();
  
    constructor(){
      /*if((<any>window).components == undefined){
        (<any>window).components = [];
      }
      (<any>window).components.push(this);*/
    }
  
    ngOnInit(): void {
      
    }
  
    protected getSessionId() : string {
      return localStorage.getItem(SessionAttributes.SESSION_ID) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.SESSION_ID)) : null;
    }
    
    goBack(lastComponent : any) : void {
      //this.getAppComponent().changeCurrentPage(this, lastComponent);
    }
    
  }