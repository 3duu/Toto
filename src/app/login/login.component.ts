import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReturnCode, UserApiService } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { REGISTER_USER_PAGE } from '../application';
import { ColorClass } from '../styles/styles';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private userApi : UserApiService) {
    super();
  } 

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = false;
    this.onLogged(null);
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
      this.onLogged(null);
    }
  }

  facebook() : void {
    console.log("submit login to facebook");
  }

  google() : void {
    console.log("submit login to google");
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}