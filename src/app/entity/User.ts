import { Bookmark } from './Bookmark';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Pet } from './Pet';
import { Rating } from './Rating';
import { PetService } from './PetService';

@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column("login")
    private login : string;

    @Column("signin_date")
    private signInDate : Date;

    @Column("password")
    private password : string;

    @Column("encrypted_password")
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
  
    getId() : number {
        return this.id;
    }

    getLogin() : string {
        return this.login;
    }

    setLogin(login : string) : void {
        this.login = login;
    }

    getSignInDate() : Date {
        return this.signInDate;
    }

    getPassword() : string {
        return this.encryptedPassword;
    }

    setPassword(password : string) : void {
        this.password = password;
    }

    getPets() : Pet[] {
        return this.pets;
    }

    getBookmarks() : Bookmark[] {
        return this.bookmarks;
    }

    getPetServices() : PetService[] {
        return this.petServices;
    }

    getRatings() : Rating[] {
        return this.ratings;
    }

    getMyRating() : Rating[] {
        return this.myRatings;
    }
  
}