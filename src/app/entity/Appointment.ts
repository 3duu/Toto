import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { User } from './User';
import { Pet } from './Pet';

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private date : string;

    @Column()
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

    getId() {
        return this.id;
    }

    getPets() {
        return this.pets;
    }

    getUser() {
        if(this.pets != null && this.pets != undefined){
            return this.pets[0].getUser();
        }
       
        return null;
    }

    getName() {
        return "null";
    }
  
}