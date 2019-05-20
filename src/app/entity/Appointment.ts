import { Pet } from './Pet';
import { User } from './User';

export class Appointment {

    id : number;
    date : Date;
    appointmentType : AppointmentType;
    pet : Pet;
    user : User;

    constructor() { }
  
}

export enum AppointmentType {

    OTHER,
	VACCINE,
	CONSULTING,
	BATH,
	WALK
  
}