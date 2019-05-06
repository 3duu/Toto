import { Injectable, NgZone } from '@angular/core';
import { AuthenticationService } from '../service/services';
import { SessionAttributes, StringUtils, ObjectUtils } from '../utils';
import { User } from '../entity/User';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HOME_PAGE, WELCOME_PAGE } from '../application';
import { environment } from 'src/environments/environment';

export const PASSWORD_CONFIG = environment.passwordConfig;

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _authenticationService: AuthenticationService, private _zone : NgZone) { }

  get zone() : NgZone {
    return this._zone;
  }

  get authenticationService() : AuthenticationService {
    return this._authenticationService;
  }

  setUserInSession = (result : any, password : string) : void => {
    if (result && result.sid) {
      //store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(result.entity));
      localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, password);
      localStorage.setItem(SessionAttributes.SESSION_ID, result.sid);
      localStorage.setItem(SessionAttributes.LOGIN_DATE, result.date);
    }
  }

  getCurrentUser() : User {
    let json = localStorage.getItem(SessionAttributes.CURRENT_USER) != undefined ? JSON.parse(localStorage.getItem(SessionAttributes.CURRENT_USER)) : null;
    if(json != null){
      let user : User = new User();
      user.id = json.id;
      user.name= json.name;
      user.password = json.password;
      user.username = json.username;
      user.creationDate = json.creationDate;
      user.admin = json.admin;
      user.pets = json.pets;
      return user;
    }
    return json;
  }

  onLogged(redirectUrl: string, router : Router, menu : NavbarComponent) : void {

    if(StringUtils.isEmpty(redirectUrl)){
      redirectUrl = HOME_PAGE;
    }
    const user : User = this.getCurrentUser();
    if(!ObjectUtils.isEmpty(user)){

        if(!ObjectUtils.isEmpty(menu)){
            menu.user = user;
        }
        if(ObjectUtils.isEmpty(this.zone)){
            router.navigateByUrl(redirectUrl);
        }
        else {
          this.zone.run(() => router.navigateByUrl(redirectUrl));
        }
    }
  }

  onLogout(redirectUrl : string, zone : NgZone, router : Router, menu : NavbarComponent, authenticationService : AuthenticationService) {
      if(StringUtils.isEmpty(redirectUrl)){
        redirectUrl = WELCOME_PAGE;
      }
      const user : User = this.getCurrentUser();
      if(!ObjectUtils.isEmpty(user)){
          authenticationService.localDatabase.resetUsers();
          if(ObjectUtils.isEmpty(zone)){
              router.navigateByUrl(redirectUrl);
          }
          else {
              zone.run(() => router.navigateByUrl(redirectUrl));
          }
      }
      this.resetSession();
  }

  resetSession() {
      let values = Object.keys(SessionAttributes).map(k => SessionAttributes[k as any]);
      values.forEach(attr => {
          localStorage.removeItem(attr);
      });
  }
}
