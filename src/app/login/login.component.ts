import { SessionService } from './../session/session.service';
import { MenuService } from './../navbar/menuService';
import { Component, ViewChild, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { ColorClass } from '../styles/styles';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { REGISTER_USER_PAGE } from '../application';

//https://bootsnipp.com/snippets/kMd
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private session : SessionService, private menuService : MenuService, private router: Router) {
    super();
  } 

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  ngOnInit() : void {
    this.menu.disableMenu = true;
    this.menu.disable = false;
    this.session.onLogged(null, this.router, this.menuService.menu);
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd(eventArgs) {
    this.loading = false;

    if(eventArgs.code == ReturnCode.SUCCESS){
      this.session.onLogged(null, this.router, this.menu);
    }
    else {
      if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      else {
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
    }
  }

  facebook() : void {
    console.log("submit login to facebook");
  }

  google() : void {
    console.log("submit login to google");
  }

  register() : void {
    this.router.navigateByUrl(REGISTER_USER_PAGE);
  }

}