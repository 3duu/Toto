import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { Weekday, getWeekday, addDays } from './system';

export class User {

    id : number;
    username : string;
    name : string;
    creationDate : Date;
    password : string;
    loginType: SociaNetworkType;
    pets: Pet[];
    appointments : Appointment[];
    rate : number;
}

export enum State {
    SP= "São Paulo",
    RJ= "Rio de Janeiro",
    MG= "Minas Gerais",
    PE= "Pernambuco",
    BA= "Bahia",
    SC= "Santa Catarina",
    RS= "Rio Grande do Sul",
    PR= "Paraná",
    CE= "Ceará",
    PI= "Piauí",
    GO= "Gaoiás",
    MT= "Mato Grosso",
    PA= "Pará",
    AM= "Amazonas",
    AP= "Amapá",
    AL= "Alagoas",
    PB= "Paraíba",
    RO= "Rondônia",
    RR= "Roraima",
    RN= "Rio Grande do Norte",
    ES= "Espirito Santo",
    DF= "Distrito Federal",
    AC= "Acre",
    MA= "Maranhão",
    SE= "Sergipe",
    TO= "Tocantins",
    MS= "Mato Grosso do Sul"
}

export class Address {

    id : number;
    streetName : string;
    number : string;
    complement : string;
    zipcode : string;
    city : string;
    state : State;
    geolocationstate : Geolocation;
}

export class Appointment {

    id : number;
    date : Date;
    activity : Activity;
    description : string;
    pet : Pet;
    user : User;
    frequencyType : AppointmentExecutionFrequency;
    private today : Date

    constructor() {
        this.today = new Date();
    }

    static newInstance(data) : Appointment  {
        const a : Appointment = new Appointment();
        a.id = data.id;
        a.date = new Date(data.date);
        a.description = data.description;
        a.frequencyType = AppointmentExecutionFrequency[<string>data.frequencyType];
        a.pet = data.pet;
        return a;
    }

    get alarm() : Date {

        let dt : Date = this.today;
        switch(this.frequencyType) {

            case AppointmentExecutionFrequency.DAILY_BASIS:
                dt.setHours(this.today.getHours());
                dt.setMinutes(this.today.getMinutes());
                return dt;
            case AppointmentExecutionFrequency.WEEKDAY:
                const weekday = getWeekday(this.date);
                for(let i = 0; i < 7; i++){
                    if(getWeekday(dt) != weekday){
                        dt = addDays(dt, 1);
                    }
                }
                dt.setHours(this.date.getHours());
                dt.setMinutes(this.date.getMinutes());
                return dt;
            case AppointmentExecutionFrequency.WEEKEND:
                for(let i = 0; i < 7; i++){
                    if(getWeekday(dt) != Weekday.SATURDAY && getWeekday(dt) != Weekday.SUNDAY){
                        dt = addDays(dt, 1);
                    }
                }
                dt.setHours(this.date.getHours());
                dt.setMinutes(this.date.getMinutes());
                return dt;
        }
        return this.date;
    }

    get day() : number {
        return this.alarm.getUTCDate();
    }

    get month() : string {
        return Month[Object.keys(Month)[this.alarm.getUTCMonth()]];
    }

    get year() : number {
        return this.alarm.getFullYear();
    }

    get time() : number {
        return this.alarm.getTime();
    }

    get fulldate() : string {
        return (this.alarm.getUTCMonth() + 1) + "-" + this.day  + "-" + this.year;
    }

    get weekday() : Weekday {
        return getWeekday(this.alarm);
        //return new LanguageService().getWeekday(getWeekday(this.alarm));
    }
}

export class Activity {

    id : number;
    description : string;
    levels : number[];

    static newInstance(data) : Activity  {
        const a : Activity = new Activity();
        a.id = data.id;
        a.description = data.description;
        return a;
    }
}

export enum Month {
    JANUARY ="Janeiro",
    FEBRUARY ="Fevereiro",
    MARCH ="Março",
    APRIL ="Abril",
    MAY ="Maio",
    JUNE ="Junho",
    JULY ="Julho",
    AUGUST ="Agosto",
    SEPTEMBER ="Setembro",
    OCTOBER ="Outubro",
    NOVEMBER ="Novembro",
    DECEMBER ="Dezembro"
}

export enum AppointmentExecutionFrequency {

    ONCE,
    DAILY_BASIS,
    WEEKDAY,
    WEEKEND
}

export class Pet {

    id : number;
    name : string;
    creationDate : Date;
	birthDate : Date;
	age : number;
    img : string;
    breed : Breed;
	description : string;
    user : User;
    appointments: Appointment[];

    constructor() { }
}

export class Breed {
    
    static readonly MAX_LEVEL : number = 5;
    id : number;
	description : string;
    level : number;
    info : string;
}

export class Notification {
    description : string;
    viewed : boolean;
}