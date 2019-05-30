import { SessionService } from './session/session.service';
import { environment } from './../environments/environment';
import { OnInit, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { LanguageService } from './language/Language';
import { User } from './entity/entities';

//https://malcoded.com/posts/why-angular-not-works/
export class AppBase implements OnInit, AfterContentInit, AfterViewInit {

  protected applicationName : string = environment.name;
  private static _language : LanguageService = new LanguageService();
  protected loading = false;
  title : string = this.applicationName;

  @Input() active : boolean;

  get user() : User {
    return this.session.getCurrentUser();
  }

  get menu() {
    return this.session.menuService.menu;
  }

  get language() : LanguageService {
    return AppBase._language;
  }

  setTitle() {
    this.menu.title = this.title;
  }

  constructor(protected session : SessionService){
    if((<any>window).components == undefined){
      (<any>window).components = [];
    }
    (<any>window).components.push(this);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    
  }
  ngAfterContentInit() {
    
  }
    
}