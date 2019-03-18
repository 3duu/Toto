import { Bookmark } from './Bookmark';
import { Pet } from './Pet';
import { Rating } from './Rating';
import { PetService } from './PetService';

export class User {

    private id : number;

    private username : string;

    private name : string;

    private creationDate : Date;

    private password : string;

    private admin : boolean;

    //@OneToMany(type => Pet, pet => pet.getUser())
    pets: Pet[];

    //@OneToMany(type => Bookmark, bookmark => bookmark.getUser())
    bookmarks: Bookmark[];

    //@OneToMany(type => Rating, rating => rating.getOwner())
    ratings: Rating[];

    //@OneToMany(type => Rating, rating => rating.getRated())
    myRatings: Rating[];

    //@OneToMany(type => PetService, petService => petService.getOwner())
    petServices: PetService[];

    rate : number;

    constructor() { }
  
    getId() : number {
        return this.id;
    }

    setId(id : number) : void {
        this.id = id;
    }

    getUsername() : string {
        return this.username;
    }

    setUsername(username : string) : void {
        this.username = username;
    }

    getName() : string {
        return this.name;
    }

    setName(name : string) : void {
        this.name = name;
    }

    getCreationDate() : Date {
        return this.creationDate;
    }

    setCreationDate(creationDate : Date) : void {
        this.creationDate = creationDate;
    }

    getPassword() : string {
        return this.password;
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

    isAdmin() : boolean {
        return this.admin;
    }

    setAdmin(admin : boolean) : void {
        this.admin = admin;
    }
  
}