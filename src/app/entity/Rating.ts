import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { User } from './User';

@Entity()
export class Rating {

    static MAX_RATING : number = 5;

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private ratingDate : string;

    @Column()
    value : number;

    @ManyToOne(type => User, owner => owner.getRatings())
    private owner : User;

    @OneToOne(type => User)
    @JoinColumn()
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

    getRatingDate() {
        return this.ratingDate;
    }
}