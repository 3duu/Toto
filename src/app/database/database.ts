/*import {getManager} from "typeorm";
import { User } from '../entity/User';

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

export class SQLite {
	
	createTables : string[] = [
		'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, name text, email text, password text)',
		'CREATE TABLE IF NOT EXISTS pet (id integer primary key autoincrement, name text, type number, userId number)'
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
	
	prepare() : void {
		/*window.openDatabase("form", "2.0", "form DB", 1000000);
		app.db.transaction(createDatabase, errorCB, successCB);*/
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