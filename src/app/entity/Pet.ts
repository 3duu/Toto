import { User } from './User';
import { Appointment } from './Appointment';

export class Pet {

    id : number;

    name : string;

    creationDate : Date;

    birthDate : Date;

    img : string;

    petType: PetType
	
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
	TURTLE,
	MOUSE,
	HAMSTER,
	FISH,
	SNAKE,
	HEDGEHOG,
	PIG
}