import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class Bookmark {

    @PrimaryGeneratedColumn()
    private id : number;

    constructor() { }
  
    ngOnInit() {
    }
  
}