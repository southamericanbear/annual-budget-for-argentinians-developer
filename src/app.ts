import express from 'express';
import { dollar } from './routes';
import { updateScheduleAllDays } from './services/update-schedule';

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

		//make this call to update the dollar value every hour between 10am and 4pm from Monday to Friday
		updateScheduleAllDays(840000);
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
	}
}

export default new App().server;
