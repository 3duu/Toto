import { User } from './User';
import { Appointment } from './Appointment';

export class Pet {

    id : number;

    name : string;

    creationDate : Date;

	//birthDate : Date;
	
	age : number;

    img : string;
	
	petType: PetType
	
	description: string;

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