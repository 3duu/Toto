import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from './User';

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getPets())
    private user : User;

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getUser() {
        return this.user;
    }
  
}