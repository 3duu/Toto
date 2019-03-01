import {getManager} from "typeorm";
import { User } from '../entity/User';
import { findNode } from '@angular/compiler';

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
}