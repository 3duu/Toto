import { Language } from './language/Language';
import { Component, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { environment } from 'src/environments/environment';

//ng generate component home --entryComponent=true
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

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

  title = AppComponent.applicationName;
}
