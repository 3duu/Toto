import { LocalDatabaseService } from './../database/database';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE, REGISTER_USER_PAGE } from '../application';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { SignInComponent } from '../button/signin/signin.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase implements AfterViewInit {

  constructor(private sqlite : LocalDatabaseService) {
    super();
  }

  @ViewChild(SignInComponent) private signin: SignInComponent;

  ngOnInit() : void {
    this.sqlite.openDatabase();
    this.sqlite.createTables();
  }

  ngAfterViewInit(): void {
    //this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = true;
    this.sqlite.getCurrentUser(this.doLogin);
    
  }

  doLogin(result : any) {
    this.signin.form = new NgForm([],[]);
    console.log(this.signin.form);
    this.signin.doLogin();
  }

  onLoginInit() {
    this.loading = true;
  }

  onLoginEnd() {
    this.loading = false;
  }

  onLoginSuccess(eventArgs : ReturnCodeEventArgs) {
    this.onLogged(LOGIN_PAGE.getAfterLoginPageRedirection());
  }

  login() : void {
    super.changeCurrentPage(this, LOGIN_PAGE);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}
