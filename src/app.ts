import express from 'express';
import { dollar } from './routes';

class App {
	public server;
	public paths;
	public services: () => void;

	constructor() {
		this.server = express();
		this.middlewares();
		this.paths = {
			dollar: '/api/dollar',
		};
		this.routes();
		this.services();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
	}
}

export default new App().server;
