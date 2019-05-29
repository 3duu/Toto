import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';

export class Rating {

    static MAX_RATING : number = 5;

    id : number;
    ratingDate : Date;
    value : number;
    owner : User;
    rated : User;
    
    constructor() { }
}

export class Bookmark {

    id : number;
    user : User;

    constructor() { }
  
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

    //bookmarks: Bookmark[];

    //ratings: Rating[];

    //myRatings: Rating[];

    petServices: PetService[];
    rate : number;

    constructor() { }
  
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
    RR= "Raraima",
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

    constructor() { }
  
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

    constructor() { }
  
}

export class Appointment {

    id : number;
    date : Date;
    appointmentType : AppointmentType;
    pet : Pet;
    user : User;

    constructor() { }
  
}

export class AppointmentType {

    id : number;
    description : string;
  
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