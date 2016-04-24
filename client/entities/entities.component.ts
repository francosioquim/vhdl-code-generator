import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {Entity} from '../entities/entity';

@Component({
	selector: 'my-entity',
	template: require('../entities/entities.component.html')
})

export class EntitiesComponent {
  entity: Entity;
  pageTitle = 'VHDL Code Generator';

  constructor(
	  private _router: Router) { }

}
