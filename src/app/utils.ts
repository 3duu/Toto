import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { User } from './entity/User';
import { HOME_PAGE } from './application';

export class StringUtils {

    static isEmpty(str : string) : boolean {
        return (str == undefined || str == null || str.trim() == "");
    }

    static isEmail(text : string):boolean
    {
        let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regex.test(text)
    }
}

export class FormUtils {

    static log(text : any) : void {
        console.log(text);
    }
}

export class LoginUtils {
  
    static setUserInSession(result : any, password : string) : void {
        if (result && result.sid) {
          //store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(result.entity));
          localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, password);
          localStorage.setItem(SessionAttributes.SESSION_ID, result.sid);
          localStorage.setItem(SessionAttributes.LOGIN_DATE, result.date);
        }
    }

    static getCurrentUser() : User {
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

    static onLogged(afterLoginRedirectUrl: string, router : Router, menu : NavbarComponent) : void {
        if(StringUtils.isEmpty(afterLoginRedirectUrl)){
            afterLoginRedirectUrl = HOME_PAGE;
        }
        let user : User = LoginUtils.getCurrentUser();
        if(user != null && !ObjectUtils.isEmpty(menu)){
            menu.user = user;
            router.navigateByUrl(afterLoginRedirectUrl);
        }
      }
}

export class ObjectUtils {

    static isEmpty(str : any) : boolean {
        return (str == undefined || str == null);
    }
}

export enum SessionAttributes {
    CURRENT_USER = "currentUser",
    CURRENT_PASSWORD = "currentPassword",
    SESSION_ID = "sessionId",
    LOGIN_DATE = "loginDate"
}