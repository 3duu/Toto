import { Bookmark } from './Bookmark';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Pet } from './Pet';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private login : string;

    @Column()
    private signInDate : string;

    @Column()
    private password : string;

    @Column()
    private encryptedPassword : string;

    @OneToMany(type => Pet, user => this)
    pets: Pet[];

    @OneToMany(type => Bookmark, user => this)
    bookmarks: Bookmark[];

    constructor() { }
  
    ngOnInit() {
    }
  
}