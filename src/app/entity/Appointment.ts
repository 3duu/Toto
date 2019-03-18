import { Pet } from './Pet';
import { User } from './User';

export class Appointment {

    private id : number;

    private date : Date;

    private appointmentType : AppointmentType;

    private time : string;
    
    pets: Pet[];

    constructor() { }
  
    ngOnInit() {
    }

    getId() : number {
        return this.id;
    }

    getPets() : Pet[] {
        return this.pets;
    }

    getUser() : User {
        if(this.pets != null && this.pets != undefined){
            return this.pets[0].getUser();
        }
       
        return null;
    }

    getName() {
        return "null";
    }
  
}