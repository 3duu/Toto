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

export enum SessionAttributes {
    CURRENT_USER = "currentUser",
    CURRENT_PASSWORD = "currentPassword",
    SESSION_ID = "sessionId",
    LOGIN_DATE = "loginDate",
    EDITING_PET = "editingPet"
}