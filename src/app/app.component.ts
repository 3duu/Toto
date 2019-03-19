import { LoginComponent } from './login/login.component';
import { Language } from './language/Language';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Type, AfterContentInit } from '@angular/core';
import { User } from './entity/User';
import { environment } from 'src/environments/environment';
import { ApiService } from './service/services';
import { NavbarComponent } from './navbar/navbar.component';

//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {

  static applicationName : string = environment.name;
  static language : Language = new Language();
  static user: User;
  private static appComponent : AppComponent;
  // Keep track of list of generated components for removal purposes
  private components = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef) {
    AppComponent.appComponent = this;
  }
  
  static getAppComponent() : AppComponent {
    return AppComponent.appComponent;
  }

  addComponent(componentClass: Type<any>) : void {
    // Create component dynamically inside the ng-template
    if(this.container != null){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
      const component = this.container.createComponent(componentFactory);

      // Push the component so that we can keep track of which components are created
      this.components.push(component);
    }
  }

  removeComponent(componentClass: Type<any>) : void {
    // Find the component
    const component = this.components.find((component) => component.instance instanceof componentClass);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }

  ngAfterContentInit(): void {
    //this.addComponent(LoginComponent);
    //AppComponent.getAppComponent().addComponent(LoginComponent);
  }

  title = AppComponent.applicationName;
}

export class AppBase implements OnInit {
  
  private user : User;
  private showNavMenu : boolean;

  //@ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  applicationName : string = AppComponent.applicationName;
  language : Language = AppComponent.language;

  private static modules : AppBase[] = [];
  private static navbarComponent : NavbarComponent;

  constructor(protected api: ApiService){
    AppBase.addModule(this);
  }

  ngOnInit(): void {
    
  }

  getUser() : User {
    return this.user;
  }

  setNavMenuVisiility() : boolean {
    return this.showNavMenu;
  }
  
  getNavbarComponent() : NavbarComponent {
    return AppBase.navbarComponent;
    /*for(let m in AppBase.modules){
      if('NavbarComponent' == m.constructor.name){
        return m;
      }
    }*/
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
  
}
