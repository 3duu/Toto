import { User } from './User';

export class Rating {

    static MAX_RATING : number = 5;

    private id : number;

    private ratingDate : Date;

    value : number;

    private owner : User;

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