import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
	selector: 'login-app',
})

export class LoginComponent {
	
	constructor(
		public email: string,
		public password: string
	) { }
	
}