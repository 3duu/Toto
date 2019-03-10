import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { User } from './User';

@Entity("rating")
export class Rating {

    static MAX_RATING : number = 5;

    @PrimaryGeneratedColumn()
    private id : number;

    @Column("rating_date")
    private ratingDate : Date;

    @Column("value")
    value : number;

    @ManyToOne(type => User, owner => owner.getRatings())
    private owner : User;

    @OneToOne(type => User)
    @JoinColumn()
    private rated : User;
    
    constructor() { }
  
    getId() : number {
        return this.id;
    }

    getOwner() : User {
        return this.owner;
    }

    getRated() : User {
        return this.rated;
    }

    getRatingDate() : Date {
        return this.ratingDate;
    }
}