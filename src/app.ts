import express from 'express';
import { dollar } from './routes';
import googleShetsService from './services/google-sheets';
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
		this.services();
		updateValueCellDollarBlue();
	}

	middlewares() {
		this.server.use(express.json());
	}

	services() {
		googleShetsService;
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
	}
}

export default new App().server;
