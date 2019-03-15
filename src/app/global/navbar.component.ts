import { AppComponent, AppBase } from '../app.component';
import { Component } from '@angular/core';
import { ApiService } from '../service/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Navbar
export class NavbarComponent extends AppBase {
  
  constructor(api: ApiService) { 
    super(api);
  }

  ngOnInit() {
    AppBase.setNavbarComponent(this);
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

function Navbar(constructor: Function) {
  //Object.seal(constructor);
  //Object.seal(constructor.prototype);
  
  //AppBase.setNavbarComponent(constructor.prototype);
}
