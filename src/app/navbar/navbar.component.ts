import { Component, AfterContentInit } from '@angular/core';
import { UserApiService } from '../service/services';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Navbar
export class NavbarComponent extends AppBase implements AfterContentInit {
  
  constructor(private api: UserApiService) {
    super();
  }

  disableMenu = true;
  disable = false;
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
