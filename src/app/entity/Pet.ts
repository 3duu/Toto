import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { User } from './User';
import { Appointment } from './Appointment';

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getPets())
    private user : User;

    @OneToMany(type => Appointment, appointment => appointment.getPets())
    appointments: Appointment[];

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getUser() {
        return this.user;
    }

    getAppointments() {
        return this.appointments;
    }
  
}