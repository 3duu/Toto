import { SessionService } from './../session/session.service';
import { AppBase } from './../appbase';
import { Component, NgZone, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase implements OnDestroy {
 
  
  disableMenu = false;
  disable = true;
  navbarOpen = false;
  private _height : number;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(session: SessionService,
    private zone : NgZone, 
    private router: Router, 
    private element : ElementRef,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
    super(session);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

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
