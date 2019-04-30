import { SignInComponent } from './../button/signin/signin.component';
import { LOGIN_PAGE } from './../application';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { FacebookService, GoogleService } from '../socialNetwork/socialNetworkServices';
import { ReturnCodeEventArgs } from '../button/button-classes';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.user.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterUserComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  @ViewChild(SignInComponent) private login: SignInComponent;
  
  constructor(private api: UserApiService, private facebookService : FacebookService, private googleService : GoogleService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.facebookService.config();
    this.googleService.config();
  }

  facebook() : void {
    console.log("submit login to facebook");
    this.facebookService.login(this.login.doLogin());
  }

  google() : void {
    console.log("submit login to google");
    this.googleService.login(undefined);
  }

  onRegisterInit() {
    this.loading = true;
    this.alert.hide();
  }

  onRegisterEnd() {
    this.loading = false;
  }

  onRegisterSuccess(eventArgs : ReturnCodeEventArgs) {
    this.login.doLogin();
  }

  onRegisterError(eventArgs : ReturnCodeEventArgs) {
    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, eventArgs.color);
    }
    else {
      this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), eventArgs.color);
    }
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd() {
    this.loading = false;
  }

  onLoginSuccess(eventArgs : ReturnCodeEventArgs) {
    this.onLogged(LOGIN_PAGE.getAfterLoginPageRedirection());
  }

  onLoginError(eventArgs : ReturnCodeEventArgs) {
    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, eventArgs.color);
    }
    else {
      this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), eventArgs.color);
    }
  }

  goBack() : void {
    if(this.lastComponent != undefined && this.lastComponent != null){
      super.goBack(this.lastComponent);
    }
  }

}

////////////////////////////////////////////////////////////////////
/*
@Component({
  selector: 'app-pet-register',
  templateUrl: './register.pet.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterPetComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: PetApiService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
  }

  doRegister(form: NgForm) : void {

    this.alert.hide();
    this.registerForm = form;
    
  }

  requiredFieldsFilled(user: User, confirmPassword : string) : boolean {
    return !(StringUtils.isEmpty(user.username)
    || StringUtils.isEmpty(user.password)
    || StringUtils.isEmpty(user.name)
    || StringUtils.isEmpty(confirmPassword));
  }

  goBack() : void {
    if(this.lastComponent != undefined && this.lastComponent != null){
      super.goBack(this.lastComponent);
    }
  }

}*/