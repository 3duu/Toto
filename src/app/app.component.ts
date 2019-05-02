import { Language } from './language/Language';
import { Component, ViewContainerRef, ComponentFactoryResolver, Type, ViewChild, AfterContentInit, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionAttributes } from './utils';
import { WELCOME_PAGE } from './application';
import { LocalDatabaseService } from './database/database';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationService, ReturnCode } from './service/services';
import { User } from './entity/User';
import { SociaNetworkType } from './socialNetwork/socialNetworkServices';

//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit, OnInit {

  static applicationName : string = environment.name;
  static language : Language = new Language();
  // Keep track of list of generated components for removal purposes
  private components = [];

  private static INSTANCE : AppComponent;

  @ViewChild(NavbarComponent) private _menu: NavbarComponent;
  static menu: NavbarComponent;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef, private sqlite : LocalDatabaseService, private authenticationService: AuthenticationService) {
    AppComponent.INSTANCE = this;
    (<any>window).splash = this;
  }

  ngOnInit(): void {
    this.sqlite.openDatabase();
		this.sqlite.createTables();
  }

  ngAfterContentInit() : void {
    setTimeout(() => this.startApp());
  }

  static getAppComponent() : AppComponent {
    return AppComponent.INSTANCE;
  }

  private addComponent(componentClass: Type<any>) : any {
    // Create component dynamically inside the ng-template
    if(this.container != null){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
      const component = this.container.createComponent(componentFactory);
      console.log("Adicionado: " + component.instance.constructor.name);

      // Push the component so that we can keep track of which components are created
      this.components.push(component);

      return component.instance;
    }
    return null;
  }

  private removeComponent(componentClass: Type<any>, instance : boolean) : void {
    // Find the component
    const component = this.components.find(component => instance ? (component.instance instanceof componentClass.constructor) : (component.instance instanceof componentClass));
    const componentIndex = this.components.indexOf(component);
    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
      console.log("Removido: " + component.instance.constructor.name);
    }
  }

  private startApp() : void {
    //Apagar session values
    let values = Object.keys(SessionAttributes).map(k => SessionAttributes[k as any]);
    values.forEach(attr => {
      localStorage.setItem(attr, undefined);
    });
    AppComponent.menu = this._menu;
    this.sqlite.getCurrentUser(this.doLogin, this.notLogin);
    //this.changePage(WELCOME_PAGE);
  }

  changePage(page: Type<any>) : void {
    this.components.forEach(component => {
      this.removeComponent(component.instance, true);
    });
    
    //setTimeout(() => {this.addComponent(page)});
    this.addComponent(page);
  }

  changeCurrentPage(current: any, page: any) : any {
    this.removeComponent(current, true);
    return this.addComponent(page);
  }

  addSingleComponent(page: any, instance : boolean) : any {
    const component = instance ? page : this.components.find(component => component.instance instanceof page);
    if(component == null){
      return this.addComponent(page);
    }
    return component;
  }

  title = AppComponent.applicationName;
  
  doLogin = (result : any) => {
    const user : User = new User();
    user.username = result.username;
    user.password = result.password;
    user.loginType = SociaNetworkType.NONE;
    this.authenticationService.authenticate(user, this._menu, this.loginCallback);
  }

  loginCallback = (args) => {
    if(args.code == ReturnCode.SUCCESS){
      this.login();
    }
    else {
      this.notLogin();
    }
  }

  login() {
    AppComponent.menu.onLogged(null);
  }

  notLogin = () => {
    this.changeCurrentPage(AppComponent.INSTANCE, WELCOME_PAGE);
  }

  test() {
    setTimeout(() => {this.changeCurrentPage(this, WELCOME_PAGE)});
  }
}
