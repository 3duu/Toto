import { User } from './User';

export class Bookmark {

    private id : number;

    private user : User;

    constructor() { }

    getId() : number {
        return this.id;
    }

    getUser() : User {
        return this.user;
    }
  
}