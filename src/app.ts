import express from 'express';
import { dollar } from './routes';
import { updateScheduleWeekDays } from './services/update-schedule';

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

		updateScheduleWeekDays(600000);
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
	}
}

export default new App().server;
