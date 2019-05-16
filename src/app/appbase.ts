import { environment } from './../environments/environment';
import { OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { LanguageService } from './language/Language';
import { MenuService } from './navbar/menuService';

//https://malcoded.com/posts/why-angular-not-works/
export class AppBase implements OnInit, AfterContentInit, AfterViewInit {

  protected applicationName : string = environment.name;
  private static _language : LanguageService = new LanguageService();
  protected loading = false;
  title : string = this.applicationName;

  get language() {
    return AppBase._language;
  }

  setTitle(menuService : MenuService) {
    menuService.menu.title = this.title;
  }

  constructor(){
    if((<any>window).components == undefined){
      (<any>window).components = [];
    }
    (<any>window).components.push(this);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }
  ngAfterContentInit(): void {
    
  }
    
}