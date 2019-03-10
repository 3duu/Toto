import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Pet } from './Pet';
import { User } from './User';

@Entity("appointment")
export class Appointment {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column("date")
    private date : Date;

    //@Column("appointmentType")
    /*
    * @OneToOne(type => AppointmentType)
    @JoinColumn()
    */
    private appointmentType : AppointmentType;

    @Column()
    private time : string;
    
    @OneToMany(type => Pet, pet => pet.getAppointments())
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