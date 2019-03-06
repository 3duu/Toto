import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { User } from './User';
import { Pet } from './Pet';

@Entity()
export class Rating {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private retingDate : string;

    @Column()
    value : number;

    @ManyToOne(type => User, owner => owner.getRatings())
    private owner : User;

    @ManyToOne(type => User, rated => rated.getRatings())
    private rated : User;
    
    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getOwner() {
        return this.owner;
    }

    getRated() {
        return this.rated;
    }
}