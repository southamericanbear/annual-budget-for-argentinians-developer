import express from 'express';
import cors from 'cors';
import { dollar, taxes } from './routes';
import { updateScheduleWeekDays } from './services/update-schedule';
import { keepAlive } from './services/keep-alive';
import fileUpload from 'express-fileupload';

class App {
	public server;
	public paths;

	constructor() {
		this.server = express();
		this.middlewares();
		this.paths = {
			dollar: '/api/dollar',
			taxes: '/api/taxes',
		};
		this.routes();

		keepAlive();
		updateScheduleWeekDays(600000);
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
		this.server.use(
			fileUpload({
				useTempFiles: true,
				tempFileDir: '/tmp/',
				createParentPath: true,
			})
		);
	}

	routes() {
		this.server.use(this.paths.dollar, dollar);
		this.server.use(this.paths.taxes, taxes);
	}
}

export default new App().server;
