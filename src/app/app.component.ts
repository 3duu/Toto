import { Language } from './language/Language';
import { Component, ViewContainerRef, ComponentFactoryResolver, Type, ViewChild, AfterContentInit, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionAttributes, ObjectUtils } from './utils';
import { WELCOME_PAGE } from './application';
import { LocalDatabaseService } from './database/database';
import { SignInComponent } from './button/signin/signin.component';
import { NgForm } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

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
  static menu: NavbarComponent;

  static INSTANCE : AppComponent;

  @ViewChild(SignInComponent) private signin: SignInComponent;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef, private sqlite : LocalDatabaseService) {
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

    //Add NAVBAR
    AppComponent.menu = this.addSingleComponent(NavbarComponent, false);
    //this.sqlite.getCurrentUser(this.doLogin, this.notLogin);
    this.changePage(WELCOME_PAGE);
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

  doLogin(result : any) {
    
    let sc : SignInComponent;
    if(ObjectUtils.isEmpty(this)){
      sc = AppComponent.INSTANCE.signin;
    }
    else {
      sc = this.signin;
    }
    sc.form = new NgForm([],[]);
    sc.form.value.username = result.username;
    sc.form.value.password = result.password;
    sc.doLogin();
  }

  notLogin() {
    AppComponent.INSTANCE.changeCurrentPage(AppComponent.INSTANCE, WELCOME_PAGE);
  }

  test() {
    setTimeout(() => {this.changeCurrentPage(this, WELCOME_PAGE)});
  }

  onLoginSuccess(eventArgs) {
    AppComponent.menu.onLogged(null);
  }

  onLoginError(eventArgs) {
    this.notLogin();
  }
}
