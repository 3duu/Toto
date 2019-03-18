import { User } from './User';
import { ServiceType } from './ServiceType';
import { Address } from './Address';

export class PetService {

    private id : number;
    private owner : User;

    private creationDate : Date;

    private serviceType : ServiceType;

    private description : string;

    private address : Address;

    constructor() { }

    getId() : number {
        return this.id;
    }

    getOwner() : User {
        return this.owner;
    }

    getCreationDate() : Date {
        return this.creationDate;
    }

    getDescription() : string {
        return this.description;
    }

    getAddress() : Address {
        return this.address;
    }

    getServiceType() : ServiceType {
        return this.serviceType;
    } 
  
}