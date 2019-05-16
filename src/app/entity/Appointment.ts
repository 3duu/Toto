import { Pet } from './Pet';
import { User } from './User';

export class Appointment {

    id : number;

    date : Date;

    //appointmentType : AppointmentType;

    time : string;
    
    pet : Pet;

    user : User;

    constructor() { }
  
}