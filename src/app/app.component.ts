import { Language } from './language/Language';
import { Component, ViewContainerRef, ComponentFactoryResolver, Type, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginComponent, SessionAttributes } from './login/login.component';

//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  static applicationName : string = environment.name;
  static language : Language = new Language();
  private static appComponent : AppComponent;
  // Keep track of list of generated components for removal purposes
  private components = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private container: ViewContainerRef) {
    AppComponent.appComponent = this;
  }
  
  static getAppComponent() : AppComponent {
    return AppComponent.appComponent;
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
    const component = this.components.find(component => instance ? (component.instance.constructor == componentClass.constructor) : (component.instance instanceof componentClass));
    const componentIndex = this.components.indexOf(component);
    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
      console.log("Removido: " + component.instance.constructor.name);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.startApp());
    //this.startApp();
  }

  startApp() : void {
    //Apagar session values
    let values = Object.keys(SessionAttributes).map(k => SessionAttributes[k as any]);
    values.forEach(attr => {
      localStorage.setItem(attr, null);
    });
    this.changePage(LoginComponent);
  }

  changePage(page: Type<any>) : void {
    this.components.forEach(component => {
      this.removeComponent(component, true);
    });
    
    this.addComponent(page);
  }

  changeCurrentPage(current: any, page: Type<any>) : void {
    this.removeComponent(current, true);
    this.addComponent(page);
  }

  addSingleComponent(page: any, instance : boolean) : any {
    const component = instance ? page : this.components.find(component => component.instance instanceof page);
    if(component == null){
      return this.addComponent(page);
    }
    return component;
  }

  title = AppComponent.applicationName;
}
