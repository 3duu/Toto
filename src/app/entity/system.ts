export enum ReturnCode {
    SUCCESS = 0,
    NOT_FOUND = -1,
    VALIDATION_ERROR = -2,
    SERVER_ERROR = -3,
    RESOURCE_EXISTS = -4,
    CONNECTION_ERROR = -5,
}

export class Domain {
    constructor(public value: number, public text: string){}

    static fromEnum(_enum, nameTranslate) : any[] {
        const domains = [];
        const keys = Object.keys(_enum).filter(k => typeof _enum[k as any] === "number");
        for(let i = 0; i < keys.length; i++){
            const o = new Domain(i, nameTranslate != undefined ? nameTranslate(_enum[keys[i]]) : keys[i]);
            domains.push(o);
        }
        return domains;
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