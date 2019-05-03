import { environment } from './../environments/environment';
import { OnInit } from '@angular/core';
import { LanguageService } from './language/Language';
import { SessionAttributes } from './utils';

//https://malcoded.com/posts/why-angular-not-works/
export class AppBase implements OnInit /** AfterContentInit */ {
  
    protected applicationName : string = environment.name;
    protected loading = false;

    protected language : LanguageService = new LanguageService();
  
    constructor(){
      if((<any>window).components == undefined){
        (<any>window).components = [];
      }
      (<any>window).components.push(this);
    }
  
    ngOnInit(): void {
      
    }
  
    goBack(lastComponent : any) : void {
      //this.getAppComponent().changeCurrentPage(this, lastComponent);
    }
    
  }