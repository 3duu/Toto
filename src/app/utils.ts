import { LanguageService } from './language/Language';
import { NativeDateAdapter } from '@angular/material';

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

export class ObjectUtils {

    static isEmpty(str : any) : boolean {
        return (str == undefined || str == null);
    }
}

export class DateUtils {
    public static mask = {
        guide: true,
        showMask : true,
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/',/\d/, /\d/,/\d/, /\d/]
    };

    public static getAge(currentDate: Date, birthDate : Date, language : LanguageService) : string {
        let text : string = "";
        if(!ObjectUtils.isEmpty(currentDate) && !ObjectUtils.isEmpty(birthDate)) {

            const timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
            const time = timeDiff / (1000 * 3600 * 24);
            const age = Math.floor(time / 365.25);

            if(age > 0) {
              text = age + " " + (age > 1 ? language.years : language.year);
            }
            else {
              const age = Math.floor(time / 30);
              if(age > 0){
                text = age + " " + (age > 1 ? language.months : language.month).replace("-", "");
              }
              else {
                const age = Math.floor(time);
                text = age + " " + (age > 1 ? language.days : language.day).replace("-", "");
              }
            }
        }
        return text;
    }
}

const SUPPORTS_INTL_API = typeof Intl !== 'undefined';

export class DateFormat extends NativeDateAdapter {
  useUtcForDisplay = true;
  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
}

export enum SessionAttributes {
    CURRENT_USER = "currentUser",
    CURRENT_PASSWORD = "currentPassword",
    SESSION_ID = "sessionId",
    LOGIN_DATE = "loginDate",
    EDITING_PET = "editingPet",
    NOTIFICATIONS = "notifications"
}