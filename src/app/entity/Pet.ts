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

export enum PetType {
    OTHER = "Outro",
	DOG = "Cachorro",
	CAT = "Gato",
	BIRD = "Passaro",
	TURTLE = "Tartaruga",
	MOUSE = "Camundongo/Rato",
	HAMSTER = "Hamster",
	FISH = "Peixe",
	SNAKE = "Serpente",
	HEDGEHOG = "Ouriço",
	PIG = "Leitão/Porco",
	RABBIT = "Coelho",
}