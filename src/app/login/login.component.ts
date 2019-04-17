import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { StringUtils, LoginUtils } from '../utils';
import { REGISTER_PAGE, HOME_PAGE } from '../application';

declare let FB;

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
  
  constructor(private api: UserApiService) {
    super();
  } 

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = false;
    this.facebookConfig();
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
    //Chave Secreta do Aplicativo
    //b4a49157bf9ba2cc4b7b085c0ba13ad3

    console.log("submit login to facebook");
    // FB.login();
    (<any>FB).login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse && response.status == "connected") {
            (<any>window).facebook = response;
            let form : NgForm = new NgForm([],[]);
            (<any>form).value.username = response.authResponse.userID;
            (<any>form).value.password = response.authResponse.userID;
            (<any>form).value.socialMedia = SociaNetworkType.FACEBOOK;
            this.doLogin(form);
          }
          else {
            console.log('User login failed');
          }
      });
      /*(<any>FB).getLoginStatus(function(response) {
        statusChangeCallback(response);
      });*/
      /**
       * {
              status: 'connected',
              authResponse: {
                  accessToken: '...',
                  expiresIn:'...',
                  signedRequest:'...',
                  userID:'...'
              }
          }
       */
  }

  google() : void {
    alert("google");
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_PAGE);
  }

  ////plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
  private facebookConfig() : void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '389609115207477',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.2'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  //token: 69e3ce1251c258e87b8f9ffae8e60ae7
  //https://binary-studio.com/2015/09/24/facebook-login-in-cordova/
  //https://stackoverflow.com/questions/27135185/how-can-i-specify-the-minimum-sdk-in-phonegap-it-is-ignoring-android-minsdkvers
  //phonegap -d plugin add https://github.com/phonegap/phonegap-facebook-plugin.git --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"

  /**
   * function displayData($http, access_token)
{
    $http.get("https://graph.facebook.com/v2.2/me", {params: {access_token: access_token, fields: "name,gender,location,picture", format: "json" }}).then(function(result) {
        var name = result.data.name;
        var gender = result.data.gender;
        var picture = result.data.picture;

        var html = '<table id="table" data-role="table" data-mode="column" class="ui-responsive"><thead><tr><th>Field</th><th>Info</th></tr></thead><tbody>';
        html = html + "<tr><td>" + "Name" + "</td><td>" + name + "</td></tr>";
        html = html + "<tr><td>" + "Gender" + "</td><td>" + gender + "</td></tr>";
        html = html + "<tr><td>" + "Picture" + "</td><td><img src='" + picture.data.url + "' /></td></tr>";

        html = html + "</tbody></table>";

        document.getElementById("listTable").innerHTML = html;
        $.mobile.changePage($("#profile"), "slide", true, true);
    }, function(error) {
        alert("Error: " + error);
    });
}
   */


}

export enum SociaNetworkType {
  NONE = 0,
  FACEBOOK = 1,
  GOOGLE = 2,
  TWITTER = 3
}