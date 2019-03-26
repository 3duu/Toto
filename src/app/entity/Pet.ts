import { User } from './User';
import { Appointment } from './Appointment';
import { Animal } from './animal';

export class Pet {

    id : number;

    name : string;

    creationDate : Date;

    birthDate : Date;

    img : string;

    user : User;

    type : Animal;

    appointments: Appointment[];

    constructor() { }
}