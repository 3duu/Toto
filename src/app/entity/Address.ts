export class Address {

    private id : number;

    private streetName : string;

    private number : string;

    private complement : string;

    private zipcode : string;

    private city : string;

    private state : State;

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