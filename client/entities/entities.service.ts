import {Injectable} from 'angular2/core';
import {Entity} from './entity';
import {Port} from './port';
@Injectable()
export class EntitiesService {
	entityPort: Port;
	entity: Entity;
	entities: Entity[];
	
	addEntity(entity: Entity) {
		this.entity = entity;
	}

	getEntity() {
		return this.entity;
	}

	addPortToEntity() {

	}


	getPort() {
		return Promise.resolve(this.entityPort);
	}
}
