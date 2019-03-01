import { Entity } from './Entity';

export class User implements Entity {

    private id : number;
    private login : string;
    private signInDate : string;
    private password : string;
    private encryptedPassword : string;

    constructor() { }
  
    ngOnInit() {
    }
  
  }