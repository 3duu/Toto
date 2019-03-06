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
    private time : string;

    @ManyToOne(type => User, user => user.getPets())
    private user : User;
    
    @OneToMany(type => Pet, pet => pet.getUser())
    pets: Pet[];

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

  
}