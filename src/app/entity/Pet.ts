import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from './User';

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, pets => this)
    private user : User;

    constructor() { }
  
    ngOnInit() {
    }
  
}