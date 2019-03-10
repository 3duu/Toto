import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from "typeorm";
import { User } from './User';
import { Appointment } from './Appointment';

@Entity("pet")
export class Pet {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column("birth_date")
    private birthDate : Date;

    @ManyToOne(type => User, user => user.getPets())
    private user : User;

    @OneToMany(type => Appointment, appointment => appointment.getPets())
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