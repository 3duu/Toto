import { WELCOME_PAGE } from './application';
import { Component, ComponentFactoryResolver, Type, ViewChild, OnInit, NgZone, ViewContainerRef } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuService } from './navbar/menuService';
import { environment } from '../environments/environment';
import { SessionService } from './session/session.service';
import { ReturnCode } from './service/services';
import { Router } from '@angular/router';

//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  //static language : Language = new Language();
  // Keep track of list of generated components for removal purposes
  private static components = [];
  @ViewChild(NavbarComponent) private menu : NavbarComponent;

  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef, private session: SessionService, private menuService : MenuService) {
  
  }

  ngOnInit(): void {
    this.startApp();
  }

  private addComponent(componentClass: Type<any>) : any {
    // Create component dynamically inside the ng-template
    if(this.container != null){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
      const component = this.container.createComponent(componentFactory);
      console.log("Adicionado: " + component.instance.constructor.name);

      // Push the component so that we can keep track of which components are created
      AppComponent.components.push(component);

      return component.instance;
    }
    return null;
  }

  private removeComponent(componentClass: Type<any>, instance : boolean) : void {
    // Find the component
    const component = AppComponent.components.find(component => instance ? (component.instance instanceof componentClass.constructor) : (component.instance instanceof componentClass));
    const componentIndex = AppComponent.components.indexOf(component);
    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      AppComponent.components.splice(componentIndex, 1);
      console.log("Removido: " + component.instance.constructor.name);
    }
  }

  login = (args) => {
    if(args.code == ReturnCode.SUCCESS){
      this.session.onLogged(null, this.router, this.menu);
    }
    else {
      this.session.zone.run(() => this.router.navigateByUrl(WELCOME_PAGE));
    }
  }

  private startApp() : void {
    //Erase session values
    this.session.resetSession();
    this.menuService.menu = this.menu;
    if(this.router.url == "/"){
      this.session.authenticationService.authenticateLastUser(this.login, this.session.setUserInSession);
    }
    else {
      this.login({code : ReturnCode.NOT_FOUND});
    }
  }

  changePage(page: Type<any>) : void {
    AppComponent.components.forEach(component => {
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
    const component = instance ? page : AppComponent.components.find(component => component.instance instanceof page);
    if(component == null){
      return this.addComponent(page);
    }
    return component;
  }

  title = environment.name;

}
