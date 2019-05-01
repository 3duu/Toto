import { ObjectUtils } from './../utils';
import { CordovaService } from './../cordova.service';
import { User } from '../entity/User';
import { Injectable } from '@angular/core';

//https://github.com/typeorm/cordova-example
@Injectable()
export class LocalDatabaseService {

	database : any;

	constructor(private cordovaService : CordovaService) {
		(<any>window).database = this;
	}
	
	private error(err) : boolean {
		console.log("Error processing SQL: " + err.code + ": " + err.message);
		//alert('Error when executing command - ' + err.code + ": " + err.message);
		return true;
	}
	
	private success() : void {
		console.log('SQL COMMAND EXECUTED');
	}

	openDatabase() : void {
		this.database = this.cordovaService.window.openDatabase("toppet", "2.0", "toppet", 1000000);
	}

	createTables() {
		let transaction = (tx) => {

			let tables = [
				'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement,  username text, password text, current boolean)',
				'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement,  name text)'
			];
			//cria tabelas
			tables.forEach((sql) => {
				tx.executeSql(sql);
			});
		};

		this.database.transaction(transaction, this.error, this.success);
	}

	mergeUser(user : User) {
		
		const insertQuery = "INSERT INTO user (username, password, current) VALUES ('";

		let insertNew = (tx) => {
			tx.executeSql(insertQuery +user.username+"','"+user.password+"', 1)");
		};

		let lookup = (tx) => {
			tx.executeSql("SELECT * FROM user WHERE username = '" + user.username+"'", [], result);
		};

		let result = (tx, res) => {
			if(res.rows.length == 0) {
				this.database.transaction(insertNew, this.error, this.success);
			}
			else {
				if(!ObjectUtils.isEmpty(res)){
					for(var r in res.rows){
						if(res.rows[r].current == 1){
							return;
						}
	
						let update = (tx) => {
							tx.executeSql("UPDATE user SET current = 1 WHERE username = '" + user.username+"'");
						};

						this.database.transaction(update, this.error, this.success);
						return;
					}
				}
			}
		};

		this.database.transaction(lookup, this.error, this.success);
	}

	getCurrentUser(success, error) {

		let lookup = (tx) => {
			tx.executeSql("SELECT * FROM user WHERE current = 1", [], result);
		};

		let result = (tx, res) => {
			if(res.rows.length > 0) {
				for(var r in res.rows){
					if(success != undefined){
						success(res.rows[r]);
					}
					return;
				}
			}
			else {
				if(error != undefined){
					error();
				}
			}
		};

		this.database.transaction(lookup, this.error, this.success);
	}

	resetUsers() {
		let transaction = (tx) => {
			tx.executeSql("DELETE FROM user");
		};

		this.database.transaction(transaction, this.error, this.success);
	}
	
}