import { AppComponent, AppBase } from '../app.component';
import { Component, AfterContentInit } from '@angular/core';
import { ApiService } from '../service/services';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Navbar
export class NavbarComponent extends AppBase implements AfterContentInit {
  
  constructor(api: ApiService) {
    super(api);
  }

  disableMenu = true;
  navbarOpen = false;

  ngOnInit() {
    AppBase.setNavbarComponent(this);
  }

  ngAfterContentInit(): void {
    AppComponent.getAppComponent().addComponent(LoginComponent);
  }

  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

function Navbar(constructor: Function) {
  //Object.seal(constructor);
  //Object.seal(constructor.prototype);
  
  //AppBase.setNavbarComponent(constructor.prototype);
}
