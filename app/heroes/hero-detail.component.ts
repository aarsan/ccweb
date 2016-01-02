import {Component, OnInit} from 'angular2/core';
import {Hero, HeroService} from './hero.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
	template: `
		<h2>Heroes</h2>
		<div *ngIf="hero">
			<h2>"{{hero.name}}"</h2>
			<div>
				<label>id: </label>{{hero.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)]="hero.name" placeholder="name" />
			</div>
			<button (click)="gotoHeroes()">Back</button>
		</div>
		`
		,
	inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
	public hero: Hero;
	
	constructor(
		private _router:Router,
		private _routeParams:RouteParams,
		private _service:HeroService){}

	ngOnInit() {
		let id = this._routeParams.get('id');
		this._service.getHero(id).then(hero => this.hero = hero);
	}

	gotoHeroes() {
		// <a [routerLink]="['Heroes']">Heroes</a>
		this._router.navigate(['Heroes']);
	}
}