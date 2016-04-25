import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'home-page',
    template: require('../home/home.component.html')

	//templateUrl: 'client/home/home.component.html'
})

export class HomeComponent {
	pageTitle = 'VHDL Code Generator';

	constructor(
		private _router: Router) {
	}
}
