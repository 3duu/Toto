import { Pet } from './Pet';
import { User } from './User';

export class Appointment {

    id : number;

    date : Date;

    appointmentType : AppointmentType;

    time : string;
    
    pets: Pet[];

    constructor() { }
  
    ngOnInit() {
    }

    getUser() : User {
        if(this.pets != null && this.pets != undefined){
            return this.pets[0].user;
        }
       
        return null;
    }
  
}