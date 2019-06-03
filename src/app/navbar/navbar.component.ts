import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, NgZone, ElementRef } from '@angular/core';
import { User } from 'src/app/entity/entities';
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

  constructor(session: SessionService, 
    private zone : NgZone, 
    private router: Router, 
    private element : ElementRef) {
    super(session);
  }

  get height() : number {
    return this._height;
  }

  set menuTitle(value) {
    this.title = value;
  }

  ngOnInit() {
    this._height = this.element.nativeElement.offsetHeight;
  }
  
  logout() {
    console.log("loging out...");
    this.session.onLogout(null, this.zone, this.router, this, this.session.authenticationService);
  }

}
