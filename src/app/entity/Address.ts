import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity("address")
export class Address {

    @PrimaryGeneratedColumn()
    private id : number;

    @Column("streetName")
    private streetName : string;

    @Column("number")
    private number : string;

    @Column("complement")
    private complement : string;

    @Column("zipcode")
    private zipcode : string;

    @Column("city")
    private city : string;

    //@Column("state")
    private state : State;

    //@Column("geolocationstate")
    private geolocationstate : Geolocation;

    constructor() { }

    getId() : number {
        return this.id;
    }

    getStreetName() : string {
        return this.streetName;
    }

    getNumber() : string {
        return this.number;
    }

    getComplement() : string {
        return this.complement;
    }

    getZipcode() : string {
        return this.zipcode;
    }

    getCity() : string {
        return this.city;
    }

    getState() : State {
        return this.state;
    }

    getGeolocationstate() : Geolocation {
        return this.geolocationstate;
    }

  
}