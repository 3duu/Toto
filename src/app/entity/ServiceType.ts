import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class ServiceType {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private name : string;

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

    getName(){
        return this.name;
    }
  
}