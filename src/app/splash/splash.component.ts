import { WELCOME_PAGE } from './../application';
import { ObjectUtils } from './../utils';
import { LocalDatabaseService } from './../database/database';
import { Component, ViewChild } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE } from '../application';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { SignInComponent } from '../button/signin/signin.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html'
})
export class SplashComponent extends AppBase {

  constructor(private sqlite : LocalDatabaseService) {
    super();
    SplashComponent.INSTANCE = this;
    (<any>window).splash = this;
  }

  static INSTANCE : SplashComponent;
  
  @ViewChild(SignInComponent) private signin: SignInComponent;

  ngOnInit() : void {
    //setTimeout(() => {SplashComponent.INSTANCE.changeCurrentPage(SplashComponent.INSTANCE, WELCOME_PAGE)});
    setTimeout(() => {this.sqlite.getCurrentUser(this.doLogin, this.notLogin)});
  }

  doLogin(result : any) {
    
    let sc : SignInComponent;
    if(ObjectUtils.isEmpty(this)){
      sc = SplashComponent.INSTANCE.signin;
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
    SplashComponent.INSTANCE.changeCurrentPage(SplashComponent.INSTANCE, WELCOME_PAGE);
    //SplashComponent.INSTANCE.changeCurrentPage(SplashComponent.INSTANCE, WELCOME_PAGE);
  }

  test() {
    setTimeout(() => {this.changeCurrentPage(this, WELCOME_PAGE)});
  }

  onLoginSuccess(eventArgs : ReturnCodeEventArgs) {
    this.onLogged(LOGIN_PAGE.getAfterLoginPageRedirection());
  }

  onLoginError(eventArgs : ReturnCodeEventArgs) {
    this.notLogin();
  }

}
