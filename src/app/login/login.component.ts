import { SignInComponent } from './../templates/button/signin/signin.component';
import { GoogleComponent } from './../templates/button/google/google.component';
import { FacebookComponent } from './../templates/button/facebook/facebook.component';
import { AlertComponent } from './../templates/alert/alert.component';
import { SessionService } from './../session/session.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBase } from '../appbase';
import { StringUtils } from '../utils';
import { ColorClass } from '../styles/styles';
import { Router } from '@angular/router';
import { REGISTER_USER_PAGE } from '../application';
import { ReturnCode } from '../entity/system';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;

  @ViewChild(AlertComponent, { static: true }) private alert: AlertComponent;
  @ViewChild(FacebookComponent, { static: true }) private facebook: FacebookComponent;
  @ViewChild(GoogleComponent, { static: true }) private google : GoogleComponent;
  @ViewChild(SignInComponent, { static: true }) private signin : SignInComponent;
  
  constructor(session : SessionService, private router: Router) {
    super(session);
  } 

  ngOnInit() : void {
    this.menu.disable = true;
    this.session.onLogged(null, this.router, this.session.menuService.menu);
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd(eventArgs) {
    this.loading = false;
    this.facebook.stopLoading();
    this.google.stopLoading();
    this.signin.stopLoading();

    if(eventArgs == undefined) {
      return;
    }

    if(eventArgs != undefined && eventArgs.code == ReturnCode.SUCCESS){
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

  register() : void {
    this.router.navigateByUrl(REGISTER_USER_PAGE);
  }

}