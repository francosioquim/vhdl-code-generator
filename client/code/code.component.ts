import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'code-panel',
	template: require('../code/code.component.html')
})

export class CodeComponent {
	pageTitle = 'VHDL Code';

	constructor(
		private _router: Router) { }

}



