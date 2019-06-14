import { Injectable, NgZone } from '@angular/core';
import { AuthenticationService } from '../service/services';
import { SessionAttributes, StringUtils, ObjectUtils } from '../utils';
import { User, Pet } from '../entity/entities';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HOME_PAGE, WELCOME_PAGE } from '../application';
import { environment } from 'src/environments/environment';
import { MenuService } from '../navbar/menuService';
import { NotificationService } from '../notification.service';

export const PASSWORD_CONFIG = environment.passwordConfig;

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private _authenticationService: AuthenticationService, 
    private _zone : NgZone, 
    private _menuService : MenuService,
    private _notificationService : NotificationService) { 
      (<any>window).session = this;
    }
  
  private sessionUser : User;
  
  get zone() : NgZone {
    return this._zone;
  }

  get menuService() : MenuService {
    return this._menuService;
  }

  get authenticationService() : AuthenticationService {
    return this._authenticationService;
  }

  get notificationService() : NotificationService {
    return this._notificationService;
  }

  // get language() : LanguageService {
  //   return this._language;
  // }

  setUserInSession = (result : any, password : string) : void => {
    if (result && result.sid) {
      //store user details and jwt token in local storage to keep user logged in between page refreshes
      this.setAttribute(SessionAttributes.CURRENT_USER, JSON.stringify(result.data));
      this.setAttribute(SessionAttributes.CURRENT_PASSWORD, password);
      this.setAttribute(SessionAttributes.SESSION_ID, result.sid);
      this.setAttribute(SessionAttributes.LOGIN_DATE, result.date);
      this.setNotifications();
    }
  }

  setNotifications() {
    if(this.notificationService){
      const pets : Pet[] = this.getCurrentUser().pets;
      if(!ObjectUtils.isEmpty(pets)) {
        pets.forEach(pet => {
          if(!ObjectUtils.isEmpty(pet.appointments)) {
            pet.appointments.forEach(app => {
              this.notificationService.setAlarm(app);
            });
          }
        });
      }
    }
  }

  getCurrentUser() : User {
    let user : User;
    if(ObjectUtils.isEmpty(this.sessionUser)){
      this.sessionUser = this.getJsonUser();
    }

    user = this.sessionUser;
    return user;
  }

  private getJsonUser() {
    const json : User = this.getAttribute(SessionAttributes.CURRENT_USER) != undefined ? JSON.parse(this.getAttribute(SessionAttributes.CURRENT_USER)) : null;
    return json;
  }

  setEditingPet = (pet : Pet) : void => {
    if(!ObjectUtils.isEmpty(pet)) {
      this.setAttribute(SessionAttributes.EDITING_PET, JSON.stringify(pet));
    }
  }

  getEditingPet = () : Pet => {
    let json = this.getAttribute(SessionAttributes.EDITING_PET) != undefined ? JSON.parse(this.getAttribute(SessionAttributes.EDITING_PET)) : null;
    if(json != null){
      let pet : Pet = json;
      return pet;
    }
    return json;
  }

  setAttribute(sttr : string, object : any) {
    localStorage.setItem(sttr, object);
  }

  getAttribute(sttr : string) {
    return localStorage.getItem(sttr);
  }

  onLogged(redirectUrl: string, router : Router, menu : NavbarComponent) : void {

    if(StringUtils.isEmpty(redirectUrl)){
      redirectUrl = HOME_PAGE;
    }
    const user : User = this.getCurrentUser();
    if(!ObjectUtils.isEmpty(user)){

        // if(!ObjectUtils.isEmpty(menu)){
        //   menu.user = user;
        // }
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
    const values = Object.keys(SessionAttributes).map(k => SessionAttributes[k as any]);
    values.forEach(attr => {
      localStorage.removeItem(attr);
    });
  }
}
