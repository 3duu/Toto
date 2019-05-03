import { WELCOME_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, NgZone } from '@angular/core';
import { User } from '../entity/User';
import { ObjectUtils } from '../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase {
  
  disableMenu = false;
  disable = true;
  navbarOpen = false;
  user : User;

  constructor(private session: SessionService, private zone : NgZone, private router: Router) {
    super();
  }

  ngOnInit() {
    this.updateUser();
  }

  updateUser() {
    this.user = this.session.getCurrentUser();
    if(ObjectUtils.isEmpty(this.user)){
      this.user = new User();
    }
  }

  toggleNavbar() {
    this.updateUser();
    this.navbarOpen = !this.navbarOpen;
  }
  
  logout() {
    console.log("loging out...");
    this.session.onLogout(null, this.zone, this.router, this, this.session.authenticationService);
  }

}
