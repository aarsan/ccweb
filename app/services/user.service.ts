import {User} from '../user';
import {USERS} from '../data/mock-users';
import {Injectable} from 'angular2/core';



@Injectable()
export class UserService {
	getUsers() {
		return Promise.resolve(USERS);
	}
	
	getUsersSlowly() {
		return new Promise<User[]>(resolve =>
			setTimeout(()=>resolve(USERS), 2000) // 2 seconds
		);
	}
}