import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User';
import { ServiceType } from './ServiceType';
import { Address } from 'cluster';

@Entity()
export class PetService {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getPetServices())
    private owner : User;

    @Column()
    private creationDate : string;

    @Column()
    private serviceType : ServiceType;

    @Column()
    private description : string;

    @Column()
    private address : Address;

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getOwner(){
        return this.owner;
    }

    getCreationDate(){
        return this.creationDate;
    }

    getDescription(){
        return this.description;
    }
  
}