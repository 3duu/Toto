import { ColorClass } from './../styles/styles';
export enum ReturnCode {
    SUCCESS = 0,
    NOT_FOUND = -1,
    VALIDATION_ERROR = -2,
    SERVER_ERROR = -3,
    RESOURCE_EXISTS = -4,
    CONNECTION_ERROR = -5,
}

export class Item {
    constructor(public domain : Domain, public icon: string, public color : ColorClass){}
}

export class Domain {
    constructor(public value: number, public text: string){}

    enumValue: any;

    static fromEnum(_enum, nameTranslate) : any[] {
        const domains = [];
        const keys = Object.keys(_enum).filter(k => typeof _enum[k as any] === "number");
        for(let i = 0; i < keys.length; i++){
            const o = new Domain(i, nameTranslate != undefined ? nameTranslate(_enum[keys[i]]) : keys[i]);
            o.enumValue = _enum[keys[i]];
            domains.push(o);
        }
        return domains;
    }

    static getDomainByValue(value, domains : Domain[]) : Domain {
        domains.forEach(d => {
            if(d.value == value){
                return d;
            }
        });
        return null;
    }

    static getDomainByEnumValue(enumValue, domains : Domain[]) : Domain {
        domains.forEach(d => {
            if(d.enumValue == enumValue){
                return d;
            }
        });
        return null;
    }
}

export enum WorkingDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
}

export enum Weekends {
    SATURDAY,
    SUNDAY
}