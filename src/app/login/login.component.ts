import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { StringUtils, LoginUtils } from '../utils';
import { REGISTER_USER_PAGE, HOME_PAGE } from '../application';
import { FacebookService, GoogleService, SociaNetworkType } from '../socialNetwork/socialNetworkServices';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;
  private static afterLoginRedirectComponent = HOME_PAGE;

  static getAfterLoginPageRedirection() {
    return LoginComponent.afterLoginRedirectComponent;
  }

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService, private facebookService : FacebookService, private googleService : GoogleService) {
    super();
  } 

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = false;
    this.facebookService.config();
    this.googleService.config();
    this.onLogged(LoginComponent.getAfterLoginPageRedirection());
  }

  doLogin(form: NgForm) : void {
    console.log("login start");
    this.alert.hide();
    this.loginForm = form;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.alert.show(this.language.validateDataError, ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = form.value.username;
    formUser.password = form.value.password;
    if(form.value.socialMedia == ""){
      form.value.socialMedia = SociaNetworkType.NONE;
    }
    formUser.loginType = form.value.socialMedia;

    if(!this.requiredFieldsFilled(formUser)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      this.loading = false;
      return;
    }
    
    let user : Observable<any> = this.api.login(formUser);

    (<any>window).httpUser = user;

    user.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        LoginUtils.userInSession(result, this, form.value.password, LoginComponent.getAfterLoginPageRedirection());
      }
      else {
        this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
      }
    }, error => {
      console.log(error);
      this.alert.show(this.language.connectionError, ColorClass.danger);
      this.loading = false;
    });
  }

  requiredFieldsFilled(user: User) : boolean {
    return !(StringUtils.isEmpty(user.username)
    || StringUtils.isEmpty(user.password));
  }

  facebook() : void {
    console.log("submit login to facebook");
    this.facebookService.login(this.doLogin);
  }

  google() : void {
    console.log("submit login to google");
    this.googleService.login(this.doLogin);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}