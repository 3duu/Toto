import { environment } from './../environments/environment';
import { OnInit } from '@angular/core';
import { LanguageService } from './language/Language';

//https://malcoded.com/posts/why-angular-not-works/
export class AppBase implements OnInit /** AfterContentInit */ {
  
    protected applicationName : string = environment.name;
    private static _language : LanguageService = new LanguageService();
    protected loading = false;
    protected title : string;

    get language() {
      return AppBase._language;
    }
  
    constructor(){
      if((<any>window).components == undefined){
        (<any>window).components = [];
      }
      (<any>window).components.push(this);
    }
  
    ngOnInit(): void {
      
    }
    
  }