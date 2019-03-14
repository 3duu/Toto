import { AppComponent } from './../app.component';
import { PetService } from './../entity/PetService';
import { Address } from './../entity/Address';
import { Appointment } from './../entity/Appointment';
import { Bookmark } from './../entity/Bookmark';
import { Pet } from '../entity/Pet';
import { User } from '../entity/User';
import { Rating } from '../entity/Rating';
import {createConnection, Repository, getRepository, Connection, getManager, ConnectionOptions} from "typeorm";

/*
const connection  = createConnection({
	type: "cordova",
	database: "PetLif3",
	location: "default",
	entities: [ User ],
	logging: true,
	synchronize: true
});*/

//https://github.com/typeorm/cordova-example
export class GenericDao {
	
	//private createTables;
	//static entityManager = getManager();
	private static connection : Promise<Connection>;

	private static options : ConnectionOptions = {
		type: "cordova",
		database: AppComponent.applicationName,
		location: "default",
		entities: [ User ],
		logging: true,
		synchronize: true
	};

	constructor() {
		//(<any>window).db = (<any>window).openDatabase(AppComponent.applicationName, "2.0", AppComponent.applicationName+" DB", 1000000);
		//(<any>window).db.transaction(this.createDatabase, this.errorCB, this.successCB);
		this.execute();
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
	
	execute() {
		GenericDao.connection = createConnection(GenericDao.options);
	}

	protected static getConnection() : Promise<Connection> {
		return GenericDao.connection;
	}

	/**
	 * 
	 * .then(connection => {
			
			const user = new User();
			user.setLogin("admin");
			user.setPassword("1");
		
			const userRepository = getRepository('User') as Repository<User>;
			userRepository.save(user);
			
			console.log("User has been saved");
			
			const savedUser = userRepository.findOne(user.getId());
			
			console.log("User has been loaded: ", savedUser);
			alert("User has been loaded: " + JSON.stringify(savedUser));
		
		}).catch(error => {
			console.log("SQLite Error: ", error);
			alert(error);
		});
	 */

	errorCB(err) : boolean {
		console.log("Error processing SQL: " + err.code + ": " + err.message);
		alert('Error when executing command - ' + err.code + ": " + err.message);
		return true;
	}
	
	successCB() : void {
		console.log('SQL COMMAND EXECUTED');
	}
	
}

export class UserDao extends GenericDao {

	static async getUser(login : string, password : string) : Promise<User> {
		/*
		const user = await getConnection().createQueryBuilder(User, "user")
		.where("user.login = :lg and user.password = :pwd", { lg: login, pwd: password })
		.getOne();*/
		user : User;

		GenericDao.getConnection().then(con => {
			
			const userRepository = getRepository('User') as Repository<User>;

			const user = userRepository.findOne(1);
			
			console.log("User has been loaded: ", user);
			alert("User has been loaded: " + JSON.stringify(user));
			
			return user;
		
		}).catch(error => {
			console.log("SQLite Error: ", error);
			alert(error);
		});
		
		return null;
	}
}