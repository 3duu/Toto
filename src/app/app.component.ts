import { LoginComponent } from './login/login.component';

import { Language } from './language/Language';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { User } from './entity/User';
import { NavbarComponent } from './global/navbar.component';
import { environment } from 'src/environments/environment';
import { ApiService } from './service/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
  static applicationName : string = environment.name;
  static language : Language = new Language();
  static user: User;
  // Keep track of list of generated components for removal purposes
  components = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.addComponent(LoginComponent);
  }
  
  addComponent(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.container.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

  removeComponent(componentClass: Type<any>) {
    // Find the component
    const component = this.components.find((component) => component.instance instanceof componentClass);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }

  title = 'angular';
}

export class AppBase implements OnInit {
  
  private user : User;
  private showNavMenu : boolean;

  //@ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  applicationName : string = AppComponent.applicationName;
  language : Language = AppComponent.language;

  private static modules : AppBase[] = [];
  static navbarComponent : NavbarComponent;

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
  
  getNavbarComponent() /*: NavbarComponent*/ {
    for(let m in AppBase.modules){
      if('NavbarComponent' == m.constructor.name){
        return m;
      }
    }
    return null;
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
