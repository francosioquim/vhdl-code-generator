import {Component, Input, OnInit, AfterViewInit, Renderer, ElementRef} from 'angular2/core';
import {Router} from 'angular2/router';
import {Entity} from '../entities/entity';
import {Port} from '../entities/port';
import {EntitiesService} from '../entities/entities.service';

declare var componentHandler: any;

@Component({
	selector: 'my-entity',
	template: require('../entities/entities.component.html')
})

export class EntitiesComponent implements OnInit, AfterViewInit {
	port: Port;
	entity: Entity;

	entities: Entity[] = [];

	portDirections = ['In', 'Out', 'InOut'];
	showControlPanel: boolean;
	pageTitle: string;

	constructor(
		private renderer: Renderer,
		private _router: Router,
		private _entitiesService: EntitiesService) {
	}

	ngOnInit() {
		this.pageTitle = 'VHDL Code Generator';
		this.showControlPanel = false;
		this.clearPort();
		this.clearEntity();
	}

	createEntity() {
		this.toggleControlPanel();
		this._entitiesService.addEntity(this.entity).then(entities => this.entities = entities);
		this.clearPort();
		this.clearEntity();
	}

	addPort() {
		this.entity.ports.push(this.port);
		this.clearPort();
	}

	countPorts() {
		var portCount = Object.keys(this.entity.ports);
		return portCount.length;
	}

	clearEntity() {
		this.entity = {
			name: "",
			architecture: "",
			parent_name: "",
			level: 0,
			ports: []
		};
	}

	clearPort() {
		this.port = {
			name: "",
			width: 1,
			direction: "",
			relation: ""
		};
	}



	actionButton() {
		console.log('Action Execute');
	}

	toggleControlPanel() {
		this.showControlPanel = !this.showControlPanel;
	}

	ngAfterViewInit() {
		componentHandler.upgradeAllRegistered();
	}

  /*
  getPort() {
		this._entitiesService.getPort().then(
			port => { 
				this.port = port;
				this.pageTitle = this.port.name;
		});
  }
  */

}
