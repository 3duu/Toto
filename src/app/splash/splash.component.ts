import { WELCOME_PAGE } from './../application';
import { ObjectUtils } from './../utils';
import { LocalDatabaseService } from './../database/database';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE } from '../application';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { SignInComponent } from '../button/signin/signin.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html'
})
export class SplashComponent extends AppBase implements AfterViewInit {

  constructor(private sqlite : LocalDatabaseService) {
    super();
    SplashComponent.instance = this;
  }

  static instance : SplashComponent;
  
  @ViewChild(SignInComponent) private signin: SignInComponent;

  ngOnInit() : void {
    this.sqlite.openDatabase();
    this.sqlite.createTables();
  }

  ngAfterViewInit(): void {
    this.getNavbarComponent().disable = true;
    this.sqlite.getCurrentUser(this.doLogin, this.notLogin);
  }

  doLogin(result : any) {

    if(!ObjectUtils.isEmpty(result)){
      let sc : SignInComponent;
      if(ObjectUtils.isEmpty(this)){
        sc = SplashComponent.instance.signin;
      }
      else {
        sc = this.signin;
      }
      sc.form = new NgForm([],[]);
      sc.form.value.username = result.username;
      sc.form.value.password = result.password;
      sc.doLogin();
    }
    else {
      super.changeCurrentPage(this, WELCOME_PAGE);
    }
  }

  notLogin() {
    //alert(222222222);
    SplashComponent.instance.changeCurrentPage(SplashComponent.instance, WELCOME_PAGE);
  }

  onLoginSuccess(eventArgs : ReturnCodeEventArgs) {
    this.onLogged(LOGIN_PAGE.getAfterLoginPageRedirection());
  }

  onLoginError(eventArgs : ReturnCodeEventArgs) {
    console.log(eventArgs);
    this.notLogin();
  }

}
