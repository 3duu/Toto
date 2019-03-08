import { PetService } from './../entity/PetService';
import { Address } from './../entity/Address';
import { Appointment } from './../entity/Appointment';
import { Bookmark } from './../entity/Bookmark';
/*import {getManager} from "typeorm";
import { User } from '../entity/User';*/

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ConnectionOptions, createConnection } from "typeorm"
import { Pet } from '../entity/Pet';
import { User } from '../entity/User';
import { root } from '../paths';
import { Rating } from '../entity/Rating';

/*
export class GenericDao {
	static  entityManager = getManager(); // you can also get it via getConnection().manager
}

export class UserDao extends GenericDao {

	async findNode(id : number){
		return await UserDao.entityManager.findOne(User, 1);
	}

	async save(user : User){
		await UserDao.entityManager.save(user);
	}
}*/

const options: ConnectionOptions = {
	type: "sqlite",
	database: '${root}/data/line.sqlite',
	entities: [ User, Pet, PetService, Bookmark, Appointment, Address, Rating ],
	logging: true
}

export class SQLite {
	
	createTables : string[] = [
		'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, name text, email text, password text)',
		'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement, name text, type number, userId number)'
	];

	constructor() {

	}

	createDatabase(tx) {

		tx.executeSql("DROP TABLE IF EXISTS user");
		tx.executeSql("DROP TABLE IF EXISTS pet");
	
		//cria tabelas
		for(let sql in this.createTables){
			tx.executeSql(this.createTables[sql]);
		}
	}
	
	async prepare() {
		//window.openDatabase("form", "2.0", "form DB", 1000000);
		//window.db.transaction(createDatabase, errorCB, successCB);
		const connection = await createConnection(options);
		alert("Created");
		
		//const messageRepository = connection.getRepository(Message);
		//const allMessages = await messageRepository.find();

		/*
		allMessages.forEach((message: Message) => {
			const text = message.text
			if (!text) {
			  return
			}
			if (text.match(/ape/)) {
			  console.log(text)
			}
		  })

		  const messages = await messageRepository
			.createQueryBuilder("ZMESSAGE")
			.leftJoinAndSelect("ZMESSAGE.sender", "ZUSER")
			.where("ZMESSAGE.Z_PK=:id")
			.setParameter("id", 3)
			.getMany()
		  console.log(messages[0].sender)*/
	}

	errorCB(err) : boolean {
		console.log("Error processing SQL: " + err.code + ": " + err.message);
		alert('Error when executing command - ' + err.code + ": " + err.message);
		return true;
	}
	
	successCB() : void {
		console.log('SQL COMMAND EXECUTED');
	}
	
}