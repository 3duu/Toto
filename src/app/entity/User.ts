import { Bookmark } from './Bookmark';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Pet } from './Pet';
import { Rating } from './Rating';
import { PetService } from './PetService';

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

    @OneToMany(type => Pet, pet => pet.getUser())
    pets: Pet[];

    @OneToMany(type => Bookmark, bookmark => bookmark.getUser())
    bookmarks: Bookmark[];

    @OneToMany(type => Rating, rating => rating.getOwner())
    ratings: Rating[];

    @OneToMany(type => Rating, rating => rating.getRated())
    myRatings: Rating[];

    @OneToMany(type => PetService, petService => petService.getOwner())
    petServices: PetService[];

    rate : number;

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getLogin(){
        return this.login;
    }

    getSignInDate(){
        return this.signInDate;
    }

    getPassword(){
        return this.encryptedPassword;
    }

    getPets() {
        return this.pets;
    }

    getBookmarks(){
        return this.bookmarks;
    }

    getPetServices() {
        return this.petServices;
    }

    getRatings() {
        return this.ratings;
    }

    getMyRating() {
        return this.myRatings;
    }
  
}