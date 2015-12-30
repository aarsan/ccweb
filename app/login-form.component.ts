import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
	selector: 'login-form',
	templateUrl: './app/templates/login-form.component.html'
})

export class LoginFormComponent {
	public title = 'CityCorner Login'

	constructor(

		public email: string,
		public password: string

	){	}

}