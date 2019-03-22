import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { HomeComponent } from '../home/home.component';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { StringUtils } from '../utils';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //directives: [AlertComponent],
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;
  private loading = false;

  private submitted = false;
  private afterLoginRedirectComponent = HomeComponent;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService) {
    super();
  } 

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.onLogged(this.afterLoginRedirectComponent);
  }

  doLogin(form: NgForm) : void {

    this.submitted = true;
    this.alert.hide();
    this.loginForm = form;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.alert.show(this.language.validateDataError[0], ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.setUsername(form.value.username);
    formUser.setPassword(form.value.password);

    if(!this.requiredFieldsFilled(formUser)){
      this.alert.show(this.language.requiredFields[0], ColorClass.danger);
      this.loading = false;
      return;
    }
    
    let user : Observable<any> = this.api.login(formUser);
    let connectionError = true;

    (<any>window).httpUser = user;

    user.subscribe(result => {
      connectionError = false;
      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        if (result && result.sid) {
            //store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(result.entity));
            localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, form.value.password);
            localStorage.setItem(SessionAttributes.SESSION_ID, result.sid);
            localStorage.setItem(SessionAttributes.LOGIN_DATE, result.date);
            //localStorage.removeItem('currentUser');
            this.onLogged(this.afterLoginRedirectComponent);
        }
      }
      else if(result.code == ReturnCode.NOT_FOUND){
        this.alert.show(this.language.invalidUserPassword[0], ColorClass.danger);
      }
      else {
        this.alert.show(this.language.connectionError[0], ColorClass.danger);
      }
    }, error => {
      this.alert.show(this.language.connectionError[0], ColorClass.danger);
      this.loading = false;
    });

    /*
    if(connectionError) {
      this.loading = false;
      this.alert.show(this.language.connectionError[0], ColorClass.danger);
    }*/
  }

  requiredFieldsFilled(user: User) : boolean {
    return !(StringUtils.isEmpty(user.getUsername())
    || StringUtils.isEmpty(user.getPassword()));
  }

  facebook() : void {
    //alert("facebook");
  }

  google() : void {
    //alert("google");
  }

  register() : void {
    this.getAppComponent().changeCurrentPage(LoginComponent, RegisterComponent);
  }

}

export enum SessionAttributes {
  CURRENT_USER = "currentUser",
  CURRENT_PASSWORD = "currentPassword",
  SESSION_ID = "sessionId",
  LOGIN_DATE = "loginDate"
}

export enum SocialMediaLogin {
  FACEBOOK,
  GOOGLE,
  TWITTER
}