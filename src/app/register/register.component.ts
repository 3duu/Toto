import { FacebookComponent } from './../button/facebook/facebook.component';
import { SignUpComponent } from './../button/signup/signup.component';
import { PETS_PAGE, LOGIN_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { Component, ViewChild } from '@angular/core';
import { UserApiService } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { ColorClass } from '../styles/styles';
import { Router } from '@angular/router';
import { User } from '../entity/entities';
import { ReturnCode } from '../entity/system';
import { GoogleComponent } from '../button/google/google.component';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterUserComponent extends AppBase {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  @ViewChild(SignUpComponent) private submit: SignUpComponent;
  @ViewChild(FacebookComponent) private facebook: FacebookComponent;
  @ViewChild(GoogleComponent) private google : GoogleComponent;

  constructor(session: SessionService,
    private api: UserApiService,
    private router: Router) {
    super(session);
  }

  ngOnInit() {
    this.menu.disableMenu = true;
  }

  onRegisterInit() {
    this.loading = true;
    this.alert.hide();
  }

  login = (args : ReturnCodeEventArgs) => {
    this.loading = false;
    this.facebook.stopLoading();
    this.google.stopLoading();
    this.submit.stopLoading();

    if(args.code == ReturnCode.SUCCESS) {
      this.session.onLogged(PETS_PAGE, this.router, this.menu);
    }
    else {
     this.router.navigateByUrl(LOGIN_PAGE);
    }
  }

  onRegisterEnd(eventArgs : ReturnCodeEventArgs, isNetwork : boolean) {

    if(eventArgs.code == ReturnCode.SUCCESS) {
      if(isNetwork) {
        this.session.onLogged(PETS_PAGE, this.router, this.menu);
      }
      else {
        if(this.submit.form != undefined && this.submit.form.value.username != undefined && this.submit.form.value.password != undefined){
          const user : User = new User();
          user.username = this.submit.form.value.username;
          user.password = this.submit.form.value.password;
          user.loginType = SociaNetworkType.NONE;
          this.session.authenticationService.authenticate(user, this.login, this.session.setUserInSession);
        }
        else {
          this.router.navigateByUrl(LOGIN_PAGE);
        }
      }
    }
    else {
      if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      else if(eventArgs.code != ReturnCode.VALIDATION_ERROR  && StringUtils.isEmpty(eventArgs.message)) {
        this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), ColorClass.danger);
      }
      else {
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      this.loading = false;
      this.facebook.stopLoading();
      this.google.stopLoading();
      this.submit.stopLoading();
    }
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

}