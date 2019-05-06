import { MenuService } from './../navbar/menuService';
import { Component, NgZone } from '@angular/core';
import { AppBase } from './../appbase';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';
import { ReturnCode } from '../service/services';
import { WELCOME_PAGE } from '../application';

@Component({
  selector: 'app-auto-login',
  template : '<div></div>'
})
export class AutoLoginComponent extends AppBase {

  constructor(private zone : NgZone, private router: Router, private session: SessionService, private menuService : MenuService) {
    super();
  }

  ngOnInit() : void {
    this.startApp();
  }

  private login = (args) => {
    if(args.code == ReturnCode.SUCCESS){
      this.session.onLogged(null, this.zone, this.router, this.menuService.menu);
    }
    else {
      this.session.zone.run(() => this.router.navigateByUrl(WELCOME_PAGE));
    }
  }

  private startApp() : void {
    //Erase session values
    this.session.resetSession();
    this.session.authenticationService.authenticateLastUser(this.login, this.session.setUserInSession);
  }

}
