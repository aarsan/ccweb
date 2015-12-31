import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';


import {Hero} from '../hero';
import {User} from '../user';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero.service';
import {UserService} from '../services/user.service';

@Component({
	selector: 'citycorner',
	templateUrl: '../app/templates/heroes-title.html',
	styles: [`
		.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
		.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
		.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
		.heroes .badge {
			font-size: small;
			color: white;
			padding: 0.1em 0.7em;
			background-color: #369;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -1px;
		}
		.selected { background-color: #EEE; color: #369; }
	`],
	directives: [HeroDetailComponent],
	providers: [HeroService]
})

// @RouteConfig([
	
// ])

export class AppComponent implements OnInit {
	public title = 'Tour of Heroes';
	public heroes: Hero[];
	public selectedHero: Hero;
	
	constructor(private _heroService: HeroService) { }
	
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	ngOnInit() {
		this.getHeroes();
	}
	
	onSelect(hero: Hero) { this.selectedHero = hero; }

}