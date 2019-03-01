document.addEventListener("deviceready", onDeviceReady, false);

var tables = {};
tables.user = {name:"user"};
tables.user.create = 'CREATE TABLE IF NOT EXISTS '+tables.user.name+' (id integer primary key autoincrement, name text, login text, password text, admin boolean)';
tables.form = {name:"form"};
tables.form.create = 'CREATE TABLE IF NOT EXISTS '+tables.form.name+' (id integer primary key autoincrement, title text, description text)';
tables.survey = {name:"survey"};
tables.survey.create = 'CREATE TABLE IF NOT EXISTS '+tables.survey.name+' (id integer primary key autoincrement, title text, type integer, idForm integer, creationDate text, expirationDate text)';
tables.question = {name:"question"};
tables.question.create = 'CREATE TABLE IF NOT EXISTS '+tables.question.name+' (id integer primary key autoincrement, title text, type integer, idSurvey integer)';
tables.option = {name:"option"};
tables.option.create = 'CREATE TABLE IF NOT EXISTS '+tables.option.name+' (id integer primary key autoincrement, title text, idQuestion integer)';
tables.answer = {name:"answer"};
tables.answer.create = 'CREATE TABLE IF NOT EXISTS '+tables.answer.name+' (id integer primary key autoincrement, idForm integer, idQuestion integer, idOption integer, obs text, value text)';


tables.user.inserts = [];
tables.user.inserts[0] = 'INSERT INTO '+tables.user.name+' (id, name, login, password, admin) SELECT 1, "Adminstrador", "admin", "1234", true WHERE NOT EXISTS(SELECT 1 FROM '+tables.user.name+' WHERE ID = 1)';
tables.user.inserts[1] = 'INSERT INTO '+tables.user.name+' (id, name, login, password, admin) SELECT 2, "Employee", "employee", "1234", false WHERE NOT EXISTS(SELECT 1 FROM '+tables.user.name+' WHERE ID = 2)';

tables.survey.inserts = [];
tables.survey.inserts[0] = 'INSERT INTO '+tables.survey.name+' (id, title, type, idForm, creationDate) SELECT 1, "Questionário Teste ", 1, null, "21/02/2019" WHERE NOT EXISTS(SELECT 1 FROM '+tables.user.name+' WHERE ID = 1)';

function createDatabase(tx) {

	/*for(var sql in tables){
		tx.executeSql("DROP TABLE IF EXISTS " + tables[sql].name);
	}*/

	//cria tabelas
	for(var sql in tables){
		tx.executeSql(tables[sql].create);
	}

	for(var sql in tables){
		if(tables[sql].inserts != undefined){
			for(var i = 0; i < tables[sql].inserts.length; i++){
				try{
					tx.executeSql(tables[sql].inserts[i]);
				}
				catch(e){
					console.log(e);
				}
			}
		}
	}
}

function errorCB(err) {
    console.log("Error processing SQL: " + err.code + ": " + err.message);
    alert('Error when executing command - ' + err.code + ": " + err.message);
    return true;
}

function successCB() {
    console.log('SQL COMMAND EXECUTED');
} 

function onDeviceReady() {
	app.db = window.openDatabase("form", "2.0", "form DB", 1000000);
	app.db .transaction(createDatabase, errorCB, successCB);
	window.app = app;
}

app.tables = tables;
app.orm = {};

app.orm.objects = [];
app.orm.addObject = function(object){
	for(var o in app.orm.objects){
		if(!app.isEmpty(object.id) && !app.isEmpty(app.orm.objects[o].id)
		&& !app.isEmpty(object.name) && !app.isEmpty(app.orm.objects[o].name)){
			if(app.orm.objects[o].id == object.id && app.orm.objects[o].name == object.name){
				app.orm.objects[o] = object;
				return;
			}
		}
	}
	if(!app.isEmpty(object.id) && !app.isEmpty(object.name)){
		app.orm.objects.push(object);
	}
}

app.orm.find = function(table, params, callback){
	var tb = (typeof table != 'string') ? table.name : table;
	var sql = "SELECT * FROM "+tb;
	if(!app.isEmpty(params)){
		sql += " WHERE ";
		if(app.isObject(data)){
			var i = 1;
			for(var p in params){
				sql += p + ' = ' + "'" + params[p] + "'";
				if(Object.keys(params).length > i){
					sql += " AND ";
				}
				i++;
			}
		}
		else{
			sql += " ID = " + params;
		} 
	}
	                 
	app.db.transaction(function(tx){
		console.log(sql);
    	tx.executeSql(sql, [], function(tx, res) {
    		
    		var result = [];
    		for(var r in res.rows){
				var t = {name: tb};
				t.id = res.rows[r].id;

				var data = {};
				for(var d in res.rows[r]){
					data[d] = res.rows[r][d];
				}

				t.data = data;
				result.push(t);
				app.orm.addObject(t);
				t.merge = function(callback){
					return app.orm.merge(t, data, callback);
				}
    		}
    		window.res = result;
    		if(callback != undefined){
    			callback(result);
    		}
	  	});
    }, errorCB, successCB);
};

for(var sql in tables){
	var tb = tables[sql];
	tables[sql].find = function(id, callback){
		return app.orm.find(this, id, callback);
	}
}

app.orm.remove = function(table, params, callback){
	var tb = (typeof table != 'string') ? table.name : table;
	var sql = "DELETE FROM "+tb+" WHERE ";
	if(app.isObject(params)){
		var i = 1;
		for(var p in params){
			sql += p + ' = ' + "'" + params[p] + "'";
			if(Object.keys(params).length > i){
				sql += " AND ";
			}
			i++;
		}
	}
	else{
		sql += " ID = " + params;
	}                  
	app.db.transaction(function(tx){
		console.log(sql);
    	tx.executeSql(sql, [], function(tx, res) {
    		if(callback != undefined)
    			callback(res);
	  	});
    }, errorCB, successCB);
};

for(var sql in tables){
	var tb = tables[sql];
	tables[sql].remove = function(id, callback){
		return app.orm.remove(this, id, callback);
	}
}

app.orm.persist = function(table, data, callback){
	var tb = (typeof table != 'string') ? table.name : table;
	var sql = "INSERT INTO "+tb+" (";
	if(app.isObject(data)){
		var i = 1;
		for(var p in data){
			sql += p;
			if(Object.keys(data).length > i){
				sql += ", ";
			}
			i++;	
		}
	}

	sql += ") VALUES (";

	if(app.isObject(data)){
		var i = 1;
		for(var p in data){
			sql += ("'" + data[p] + "'");
			if(Object.keys(data).length > i){
				sql += ", ";
			}
			i++;
		}
	}
	sql += ");"

	app.db.transaction(function(tx){
		console.log(sql);
    	tx.executeSql(sql, [], function(tx, res) {
    		if(callback != undefined)
    			callback(res);
	  	});
    }, errorCB, successCB);
};

for(var sql in tables){
	var tb = tables[sql];
	tables[sql].persist = function(id, callback){
		return app.orm.persist(this, id, callback);
	}
}

app.orm.merge = function(table, data, callback){
	var tb = (typeof table != 'string') ? table.name : table;
	if(table.data != undefined && data == undefined){
		data = table.data;
	}
	var sql = "UPDATE "+tb+" SET ";
	if(app.isObject(data)){
		var i = 1;
		for(var p in data){
			sql += p + ' = ' + "'" + data[p] + "'";
			if(Object.keys(data).length > i){
				sql += ", ";
			}
			i++;
		}
	}

	sql += table.id != undefined ? " WHERE ID = " + table.id : "";

	app.db.transaction(function(tx){
		console.log(sql);
    	tx.executeSql(sql, [], function(tx, res) {
    		if(callback != undefined)
    			callback(res);
	  	});
    }, errorCB, successCB);
};

for(var sql in tables){
	var tb = tables[sql];
	tables[sql].merge = function(id, callback){
		return app.orm.merge(this, id, callback);
	}
}

/*
for(var tb in tables){
	for(var func in app.orm){
		var args = [];

		args[0] = tables[tb].name;
		for(var i = 0; i < app.orm[func].length; i++){

		}

		tables[tb][func] = function(id) {
			return app.orm[func](app.orm[func].arguments);
		}
	}
}*/