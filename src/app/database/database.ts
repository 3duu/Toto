import { AppComponent } from './../app.component';
import { PetService } from './../entity/PetService';
import { Address } from './../entity/Address';
import { Appointment } from './../entity/Appointment';
import { Bookmark } from './../entity/Bookmark';
/*import {getManager} from "typeorm";*/

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { ConnectionOptions } from "typeorm"
import { Pet } from '../entity/Pet';
import { User } from '../entity/User';
//import { root } from '../paths';
import { Rating } from '../entity/Rating';
import {createConnection, Repository, getRepository} from "typeorm";

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

/*
const options: ConnectionOptions = {
	type: "sqlite",
	database: '${root}/data/line.sqlite',
	entities: [ User, Pet, PetService, Bookmark, Appointment, Address, Rating ],
	logging: true
}*/

createConnection({
	type: "cordova",
	database: "PetLif3",
	location: "default",
	entities: [ User ],
	logging: true,
	synchronize: true
}).then(connection => {
	
	const user = new User();
	user.setLogin("admin");
	user.setPassword("1");

	const userRepository = getRepository('User') as Repository<User>;
	userRepository.save(user);
	
	console.log("User has been saved");
	document.writeln("User has been saved");
	
	const savedUser = userRepository.findOne(user.getId());
	
	console.log("User has been loaded: ", savedUser);
	document.writeln("User has been loaded: " + JSON.stringify(savedUser));

}).catch(error => {
	console.log("SQLite Error: ", error);
});

//https://github.com/typeorm/cordova-example
export class SQLiteDB {
	
	private createTables;
	private database : any;

	constructor() {
		this.createTables  = [
			'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, name text, email text, password text)',
			'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement, name text, type number, userId number)'
		];

		(<any>window).db = (<any>window).openDatabase(AppComponent.applicationName, "2.0", AppComponent.applicationName+" DB", 1000000);
		(<any>window).db.transaction(this.createDatabase, this.errorCB, this.successCB);
		this.database = (<any>window).db;
	}

	createDatabase(tx) {

		tx.executeSql("DROP TABLE IF EXISTS user");
		tx.executeSql("DROP TABLE IF EXISTS pet");
		let createTables = [
			'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, name text, email text, password text)',
			'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement, name text, type number, userId number)'
		];
		//cria tabelas
		createTables.forEach((sql) => {
			tx.executeSql(sql);
		});
	}
	
	async prepare() {
		//const connection = await createConnection(this.options);
		
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

	async getUser(login, password) {
		//window.openDatabase(AppComponent.applicationName, "2.0", AppComponent.applicationName+" DB", 1000000);
		//window.db.transaction(createDatabase, errorCB, successCB);
		//const connection = await createConnection(options);

		
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