import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { Weekday, getWeekday, addDays } from './system';

export class Rating {

    static MAX_RATING : number = 5;

    id : number;
    ratingDate : Date;
    value : number;
    owner : User;
    rated : User;
}

export class Bookmark {

    id : number;
    user : User;
}

export class User {

    id : number;
    username : string;
    name : string;
    creationDate : Date;
    password : string;
    admin : boolean;
    loginType: SociaNetworkType;
    pets: Pet[];
    appointments : Appointment[];
    bookmarks: Bookmark[];
    ratings: Rating[];
    myRatings: Rating[];
    petServices: PetService[];
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

export enum PetServiceType {
    PETSHOP = 1,
    DOG_WALKER = 2,
    VET = 3,
    PET_SHOWER = 4,
    KENNEL = 5
}

export class ServiceType {

    id : number;
    name : string;
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

export class PetService {

    id : number;
    user : User;
    creationDate : Date;
    serviceType : ServiceType;
    description : string;
    address : Address;

    constructor() { }
  
}

export class Pet {

    id : number;
    name : string;
    creationDate : Date;
	birthDate : Date;
	age : number;
    img : string;
    petType : PetType;
    breed : Breed;
	description : string;
    user : User;
    appointments: Appointment[];

    constructor() { }
}

export class PetType {

    id : number;
    description : string;
    icon : string;
	breeds : Breed[];
}

export class Breed {
	
    id : number;
	description : string;
	petType : PetType;
}

export class Notification {
    description : string;
    viewed : boolean;
}