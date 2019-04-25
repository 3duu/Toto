import { Bookmark } from './Bookmark';
import { Pet } from './Pet';
import { PetService } from './PetService';
import { Rating } from './Rating';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';

export class User {

    id : number;

    username : string;

    name : string;

    creationDate : Date;

    password : string;

    admin : boolean;

    loginType: SociaNetworkType;

    pets: Pet[];

    //bookmarks: Bookmark[];

    //ratings: Rating[];

    //myRatings: Rating[];

    petServices: PetService[];

    rate : number;

    constructor() { }

    /*
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }
    public set creationDate(value: Date) {
        this._creationDate = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get admin(): boolean {
        return this._admin;
    }
    public set admin(value: boolean) {
        this._admin = value;
    }

    public get pets(): Pet[] {
        return this._pets;
    }
    public set pets(value: Pet[]) {
        this._pets = value;
    }

    public get loginType(): SociaNetworkType {
        return this._loginType;
    }
    public set loginType(value: SociaNetworkType) {
        this._loginType = value;
    }

    public get petServices(): PetService[] {
        return this._petServices;
    }
    public set petServices(value: PetService[]) {
        this._petServices = value;
    }*/
  
}