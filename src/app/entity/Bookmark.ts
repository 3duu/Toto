import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User';

@Entity("bookmark")
export class Bookmark {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getBookmarks())
    private user : User;

    constructor() { }

    getId() : number {
        return this.id;
    }

    getUser() : User {
        return this.user;
    }
  
}