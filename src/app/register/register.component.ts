import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils, LoginUtils } from '../utils';
import { FacebookService, GoogleService } from '../socialNetwork/socialNetworkServices';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { ColorClass } from '../styles/styles';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from './../navbar/menuService';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.user.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterUserComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }
  
  constructor(public router: Router, private menuService : MenuService, private api: UserApiService, private facebookService : FacebookService, private googleService : GoogleService) {
    super();
  }

  ngOnInit() : void {
    this.menu.disableMenu = true;
    this.facebookService.config();
    this.googleService.config();
  }

  facebook() : void {
    console.log("submit login to facebook");
    //this.facebookService.login(this.login.doLogin());
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
    //this.login.doLogin();
  }

  onRegisterError(eventArgs : ReturnCodeEventArgs) {
    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, ColorClass.danger);
    }
    else {
      this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), ColorClass.danger);
    }
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd(eventArgs : ReturnCodeEventArgs) {
    this.loading = false;

    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, ColorClass.danger);
    }
    else if(eventArgs.code == ReturnCode.VALIDATION_ERROR) {
      this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), ColorClass.danger);
    }
    else {
      LoginUtils.onLogged(null, this.router, this.menu);
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