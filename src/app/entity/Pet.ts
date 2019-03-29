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
    OTHER = "Outro",
	DOG = "Cachorro",
	CAT = "Gato",
	BIRD = "Pássaro",
	FISH = "Peixe",
	/*RABBIT = "Coelho",
	HAMSTER = "Hamster",*/
}