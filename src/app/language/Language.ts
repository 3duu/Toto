import { User } from '../entity/User';

export class Language {

    constructor(private User) { }

    adoptions : string[] = ["Adoção"];
    init : string[] = ["Início"];
    login : string[] = ["Entrar"];
    myPet : string[] = ["Toto"];
    about : string[] = ["Sobre"];

    getUser(){
        return this.User;
    }
}