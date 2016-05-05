import {Injectable} from 'angular2/core';
import {Entity} from './entity';
import {Port} from './port';


@Injectable()
export class EntitiesService {
	port: Port;
	entity: Entity;
	entities: Entity[] = [];
	ports: Port[] = [];
	
	addEntity(entityData: Entity) {
		this.entity = entityData;
		this.entities.push(entityData);
		return Promise.resolve(this.entities);
	}

	updateEntity(entityInput: Entity) {
		this.entities.forEach(function(entityData) {
			if (entityData.name == entityInput.name) {
				entityData = entityInput;
			}
		});
	}

	getEntity() {
		return Promise.resolve(this.entity);
	}

	getEntities() {
		return Promise.resolve(this.entities);
	}

	getEntitybyName(entityName: string) {
		var returnData = this.clearEntity();
		this.entities.forEach(function(entityData) {
			if (entityData.name == entityName) {
				returnData = entityData;
			}
		});
		return returnData;
	}

	clearEntity() {
		return this.entity = {
			name: "",
			architecture: "",
			parent_name: "",
			level: 0,
			ports: []
		};
	}

	listAvailablePorts(direction: string, level: number) {
		console.log(this.entity);
	}

	addPorts(portsData) {
		this.ports.push(portsData);
		return Promise.resolve(this.ports);
	}


	getPort() {
		return Promise.resolve(this.port);
	}
}
