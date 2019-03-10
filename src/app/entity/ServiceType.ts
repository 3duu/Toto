import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity("service_type")
export class ServiceType {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private name : string;

    constructor() { }
  
    getId() : number {
        return this.id;
    }

    getName() : string {
        return this.name;
    }
  
}