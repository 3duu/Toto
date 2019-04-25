import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { NgForm } from '@angular/forms';

export enum SociaNetworkType {
  NONE = 0,
  FACEBOOK = 1,
  GOOGLE = 2,
  TWITTER = 3
}

interface SocialNetworkService {
  config() : void;
  login(callback) : void;
}

const facebookAppId = '389609115207477';
declare let FB;

@Injectable()
export class FacebookService implements SocialNetworkService {
  login(callback): void {
      //Chave Secreta do Aplicativo
      //b4a49157bf9ba2cc4b7b085c0ba13ad3
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
              callback(form);
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


    ////plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
  config() : void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : facebookAppId,
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

@Injectable()
export class GoogleService implements SocialNetworkService {
  login(callback: any): void {
    
  }
  config(): void {
    
  }
}