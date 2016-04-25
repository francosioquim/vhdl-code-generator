import {Port} from './port';

export class Entity {
	name: string;
	architecture: string;
	parent_name: string;
	ports: Port[];
}