import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { StringUtils, LoginUtils } from '../utils';
import { REGISTER_USER_PAGE, HOME_PAGE } from '../application';
import { FacebookService, GoogleService, SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { ReturnCodeEventArgs } from '../signin/signin.component';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;
  private static afterLoginRedirectComponent = HOME_PAGE;

  static getAfterLoginPageRedirection() {
    return LoginComponent.afterLoginRedirectComponent;
  }

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService, private facebookService : FacebookService, private googleService : GoogleService) {
    super();
  } 

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = false;
    this.facebookService.config();
    this.googleService.config();
    this.onLogged(LoginComponent.getAfterLoginPageRedirection());
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd() {
    this.loading = false;
  }

  onLoginSuccess(eventArgs : ReturnCodeEventArgs) {
    this.onLogged(LoginComponent.afterLoginRedirectComponent);
  }

  onLoginError(eventArgs : ReturnCodeEventArgs) {
    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, eventArgs.color);
    }
    else {
      this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), eventArgs.color);
    }
  }

  facebook() : void {
    console.log("submit login to facebook");
    //this.facebookService.login(this.doLogin);
  }

  google() : void {
    console.log("submit login to google");
    //this.googleService.login(this.doLogin);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}