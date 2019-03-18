import { User } from './User';
import { Appointment } from './Appointment';

export class Pet {

    private id : number;

    private name : string;

    private creationDate : Date;

    private birthDate : Date;

    private img : string;

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

    getName() : string {
        return this.name;
    }

    setName(name : string) : void {
        this.name = name;
    }

    getCreationDate() : Date {
        return this.creationDate;
    }

    setCreationDate(creationDate : Date) : void {
        this.creationDate = creationDate;
    }

    getImg() : string {
        return this.img;
    }

    setImg(img : string) : void {
        this.img = img;
    }
  
}