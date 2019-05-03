import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReturnCode, UserApiService } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils, LoginUtils } from '../utils';
//import { REGISTER_USER_PAGE } from '../application';
import { ColorClass } from '../styles/styles';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  @ViewChild(NavbarComponent) private menu: NavbarComponent;
  
  constructor(private router : Router, private userApi : UserApiService) {
    super();
  } 

  ngOnInit() : void {
    this.menu.disableMenu = true;
    this.menu.disable = false;
    LoginUtils.onLogged(null, this.router, this.menu);
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd(eventArgs) {
    this.loading = false;

    if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
      this.alert.show(eventArgs.message, ColorClass.danger);
    }
    else {
      this.alert.show(this.userApi.getErrorMessage(eventArgs.code, this.language), ColorClass.danger);
    }

    if(eventArgs.code == ReturnCode.SUCCESS){
      LoginUtils.onLogged(null, this.router, this.menu);
    }
  }

  facebook() : void {
    console.log("submit login to facebook");
  }

  google() : void {
    console.log("submit login to google");
  }

  register() : void {
    //super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}