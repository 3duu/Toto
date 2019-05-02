import { Component, ViewChild } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE, REGISTER_USER_PAGE } from '../application';
import { SignInComponent } from '../button/signin/signin.component';
import { ObjectUtils } from '../utils';
import { NgForm } from '@angular/forms';
import { LocalDatabaseService } from '../database/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase {

  constructor(private sqlite : LocalDatabaseService) {
    super();
    (<any>window).welcome = this;
    WelcomeComponent.INSTANCE = this;
  }

  @ViewChild(SignInComponent) private signin: SignInComponent;
  static INSTANCE : WelcomeComponent;

  ngOnInit() : void {
    //alert('gtt');
    //this.sqlite.getCurrentUser(this.doLogin, this.notLogin);
  }

  login() : void {
    super.changeCurrentPage(this, LOGIN_PAGE);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

  doLogin(result : any) {
    
    let sc : SignInComponent;
    if(ObjectUtils.isEmpty(this)){
      sc = WelcomeComponent.INSTANCE.signin;
    }
    else {
      sc = this.signin;
    }
    sc.form = new NgForm([],[]);
    sc.form.value.username = result.username;
    sc.form.value.password = result.password;
    sc.doLogin();
  }

  notLogin() {
    //WelcomeComponent.INSTANCE.changeCurrentPage(WelcomeComponent.INSTANCE, WELCOME_PAGE);
  }

  test() {
    //etTimeout(() => {this.changeCurrentPage(this, WELCOME_PAGE)});
  }

  onLoginSuccess(eventArgs) {
    this.onLogged(null);
  }

  onLoginError(eventArgs) {
    this.notLogin();
  }

}
