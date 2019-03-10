import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User';
import { ServiceType } from './ServiceType';
import { Address } from './Address';

@Entity("pet_service")
export class PetService {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getPetServices())
    private owner : User;

    @Column("creation_date")
    private creationDate : Date;

    //@Column("service_type")
    private serviceType : ServiceType;

    @Column("description")
    private description : string;

    @Column("address")
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