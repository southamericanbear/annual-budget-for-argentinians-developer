import express from 'express';
import cors from 'cors';
import { basicData, budgets, dollar, taxes } from './routes';
import { updateScheduleWeekDays } from './services/update-schedule';
import { keepAlive } from './services/keep-alive';

class App {
	public server;
	public paths;

	constructor() {
		this.server = express();
		this.middlewares();
		this.paths = {
			dollar: '/api/dollar',
			taxes: '/api/taxes',
			basicInfo: '/api/basic-data',
			budgets: '/api/budgets',
		};
		this.routes();
		keepAlive();
		updateScheduleWeekDays(600000);
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
		this.server.use(this.paths.taxes, taxes);
		this.server.use(this.paths.basicInfo, basicData);
		this.server.use(this.paths.budgets, budgets);
	}
}

export default new App().server;
