import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { ApiService, ReturnCode } from '../service/services';
import { HomeComponent } from '../home/home.component';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;
  private loading = false;

  private submitted = false;
  private afterLoginRedirectComponent = HomeComponent;
  private alert : AlertComponent;

  constructor(api: ApiService) {
    super(api);
  }

  ngOnInit() : void {
    this.alert = this.getAppComponent().addSingleComponent(AlertComponent, false);
  }

  doLogin(form: NgForm) : void {

    this.submitted = true;
    this.loginForm = form;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.setUsername(form.value.username);
    formUser.setPassword(form.value.password);

    let user = this.api.login(formUser);

    user.subscribe(ret => {
      console.log(ret);
      this.loading = false;
      if(ret.code == ReturnCode.SUCCESS){
        if (ret && ret.sid) {
            //store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(ret.entity));
            localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, form.value.password);
            localStorage.setItem(SessionAttributes.SESSION_ID, ret.sid);
            localStorage.setItem(SessionAttributes.LOGIN_DATE, ret.date);
            //localStorage.removeItem('currentUser');
            this.getNavbarComponent().disableMenu = false;
            
            this.onLogged(this.afterLoginRedirectComponent);
        }
      }
      else if(ret.code == ReturnCode.NOT_FOUND){
        //alert(this.language.invalidUserPassword);
        this.alert.show(this.language.invalidUserPassword[0], ColorClass.danger);
      }
      else {
        //alert(this.language.connectionError);
        this.alert.show(this.language.connectionError[0], ColorClass.danger);
      }
    });

    console.log(form.value);
  }
}

export enum SessionAttributes {
  CURRENT_USER = "currentUser",
  CURRENT_PASSWORD = "currentPassword",
  SESSION_ID = "sessionId",
  LOGIN_DATE = "loginDate"
}