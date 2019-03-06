import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User';
import { ServiceType } from './ServiceType';

@Entity()
export class PetService {

    @PrimaryGeneratedColumn()
    private id : number;

    @ManyToOne(type => User, user => user.getPets())
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

    getCreationDate(){
        return this.creationDate;
    }

    getDescription(){
        return this.description;
    }
  
}