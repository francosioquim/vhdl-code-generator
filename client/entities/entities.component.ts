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

	portDirections = [];
	portConnections = [];

	showControlPanel: boolean;
	editMode: boolean;
	pageTitle: string;

	constructor(
		private renderer: Renderer,
		private _router: Router,
		private _entitiesService: EntitiesService) {
	}

	ngOnInit() {
		this.pageTitle = 'VHDL Code Generator';
		this.showControlPanel = false;
		this.editMode = false;
		this.clearPort();
		this.clearEntity();
		this.portConnections = this.getAvailablePorts("In", 0);
		this.portDirections = ['In', 'Out', 'InOut'];
	}

	createEntity() {
		this.toggleControlPanel();
		this._entitiesService.addEntity(this.entity).then(entities => this.entities = entities);
		this.clearEntity();
		this.clearPort();
	}

	updateEntity() {
		this._entitiesService.updateEntity(this.entity);
		this.toggleControlPanel();
	}

	editEntity(entityName: string) {
		this.editMode = true;
		this.entity = this._entitiesService.getEntitybyName(entityName);
		this.toggleControlPanel();
	}

	deleteEntity(entityName: string) {
		this._entitiesService.deleteEntitybyName(entityName);
	}

	getAvailablePorts(direction: string, level: number) {
		var samplePorts: Port[] = [
			{ "name": "clk1", "width": 1, "direction": "In", "relation": "clk50" },
			{ "name": "clk2", "width": 1, "direction": "In", "relation": "clk25" },
			{ "name": "rst", "width": 1, "direction": "In", "relation": "clk25" },
			{ "name": "din", "width": 8, "direction": "In", "relation": "" },
			{ "name": "dout", "width": 8, "direction": "Out", "relation": "" },
			{ "name": "dinout", "width": 8, "direction": "InOut", "relation": "" },
		];
		return samplePorts;
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
		console.log(this.entities);
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
