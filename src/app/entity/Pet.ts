import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from "typeorm";
import { User } from './User';
import { Appointment } from './Appointment';

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private birthDate : Date;

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

    getBirthDate() {
        return this.birthDate;
    }

    getUser() {
        return this.user;
    }

    getAppointments() {
        return this.appointments;
    }
  
}