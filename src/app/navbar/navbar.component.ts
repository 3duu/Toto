import { AppComponent } from '../app.component';
import { Component, AfterContentInit } from '@angular/core';
import { ApiService } from '../service/services';
import { LoginComponent } from '../login/login.component';
import { AppBase } from '../appbase';

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
  username : string;

  ngOnInit() {
    AppBase.setNavbarComponent(this);
  }

  ngAfterContentInit(): void {
    
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
