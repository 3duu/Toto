import { User } from './User';
import { Appointment } from './Appointment';

export class Pet {

    private id : number;

    private birthDate : Date;

    private user : User;

    appointments: Appointment[];

    constructor() { }

    getId() : number {
        return this.id;
    }

    getBirthDate() : Date {
        return this.birthDate;
    }

    getUser() : User {
        return this.user;
    }

    getAppointments() : Appointment[] {
        return this.appointments;
    }
  
}