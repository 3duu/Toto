import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private streetName : string;

    @Column()
    private number : string;

    @Column()
    private complement : string;

    @Column()
    private zipcode : string;

    @Column()
    private state : State;

    @Column()
    private geolocationstate : Geolocation;

    constructor() { }
  
    ngOnInit() {
    }

    getId() {
        return this.id;
    }

  
}