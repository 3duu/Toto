import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Bookmark {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getBookmarks())
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