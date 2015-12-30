import {Hero} from './hero';
import {HEROES} from './mock-logins';
import {Injectable} from 'angular2/core';



@Injectable()
export class LoginService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
		);
	}
}