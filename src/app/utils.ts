import { AppBase } from './appbase';
import { Type } from '@angular/core';

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
  
    static userInSession(result : any, baseApp : AppBase, password : string, redirection : Type<any>) : void {
        if (result && result.sid) {
          //store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(result.entity));
          localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, password);
          localStorage.setItem(SessionAttributes.SESSION_ID, result.sid);
          localStorage.setItem(SessionAttributes.LOGIN_DATE, result.date);
          //localStorage.removeItem('currentUser');
          baseApp.onLogged(redirection);
        }
      }
}

export enum SessionAttributes {
    CURRENT_USER = "currentUser",
    CURRENT_PASSWORD = "currentPassword",
    SESSION_ID = "sessionId",
    LOGIN_DATE = "loginDate"
}