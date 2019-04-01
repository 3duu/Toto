import { User } from './User';
import { Appointment } from './Appointment';

export class Pet {

    id : number;

    name : string;

    creationDate : Date;

	//birthDate : Date;
	
	age : number;

    img : string;
	
	petType: number
	
	description: string;

    user : User;

    appointments: Appointment[];

    constructor() { }
}

export enum PetType {
    OTHER,
	DOG,
	CAT,
	BIRD,
	FISH,
	/*RABBIT = "Coelho",
	HAMSTER = "Hamster",*/
}