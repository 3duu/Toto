import { WELCOME_PAGE } from './application';
import { Component, ViewContainerRef, ComponentFactoryResolver, Type, ViewChild, OnInit } from '@angular/core';
import { SessionAttributes, LoginUtils } from './utils';
import { AuthenticationService, ReturnCode } from './service/services';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuService } from './navbar/menuService';

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
  @ViewChild(NavbarComponent) private menu: NavbarComponent;
  
  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef, private authenticationService: AuthenticationService, private menuService : MenuService) {
  
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
      LoginUtils.onLogged(null, this.router, this.menu);
    }
    else {
      this.router.navigateByUrl(WELCOME_PAGE);
    }
  }

  private startApp() : void {
    //Apagar session values
    console.log(localStorage);
    let values = Object.keys(SessionAttributes).map(k => SessionAttributes[k as any]);
    values.forEach(attr => {
      localStorage.removeItem(attr);
    });

    this.menuService.menu = this.menu;
    this.authenticationService.authenticateLastUser(this.login);
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

  //title = AppComponent.applicationName;

}
