import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero} from './hero';
import {User} from './user';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroService} from './heroes/hero.service';
import {UserService} from './services/user.service';

import {CrisisListComponent}   from './components/crisis-list.component';
import {HeroListComponent}     from './heroes/hero-list.component';

@Component({
	selector: 'citycorner',
	templateUrl: '../app/templates/component-router.html',
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
	directives: [HeroDetailComponent, ROUTER_DIRECTIVES],
	providers: [HeroService]
})

@RouteConfig([
	{path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
	{path:'/heroes', name: 'Heroes', component: HeroListComponent},
	{path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])

export class AppComponent implements OnInit {
	public title = 'CityCorner';
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