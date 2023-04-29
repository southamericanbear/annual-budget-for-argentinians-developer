import express from 'express';
import { dollar } from './routes';
import { updateValueCellDollarBlue } from './controllers';

class App {
	public server;
	public paths;

	constructor() {
		this.server = express();
		this.middlewares();
		this.paths = {
			dollar: '/api/dollar',
		};
		this.routes();
		setInterval(updateValueCellDollarBlue, 20000);
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
	}
}

export default new App().server;
