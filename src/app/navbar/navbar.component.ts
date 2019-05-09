import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, NgZone, ElementRef } from '@angular/core';
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
  private _height : number;

  constructor(private session: SessionService, 
    private zone : NgZone, 
    private router: Router, 
    private element : ElementRef) {
    super();
  }

  get height() : number {
    return this._height;
  }

  ngOnInit() {
    this.updateUser();
    this._height = this.element.nativeElement.offsetHeight;
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
