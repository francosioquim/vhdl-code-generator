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
  pageTitle: string;
  entities = [];
  portDirections = ['In', 'Out', 'InOut'];

	showControlPanel: boolean;

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
		console.log(this.port);
		console.log(this.entity);
  }

  createEntity() {
		this.toggleControlPanel();
		this.entities.push(this.entity);
		console.log(this.entities);
		this.clearPort();
		this.clearEntity();
		// this.entities = [{ "name": "hooo" }];
  }

  clearEntity() {
		this.entity = {
			name: "",
			architecture: "",
			parent_name: "",
			ports: []
		};
  }

  addPort() {
		this.entity.ports.push(this.port);
		console.log(this.entity.ports);
		this.clearPort();
  }

  countPorts() {
		var portCount = Object.keys(this.entity.ports);
		return portCount.length;
  }

  clearPort() {
		this.port = {
			name: "",
			width: 1,
			direction: "",
			relation: ""
		};
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
