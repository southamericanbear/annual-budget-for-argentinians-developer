import { Router } from 'express';
import { getDollarBlueValue } from './use-cases/dollar-blue-value';

const routes = Router();

routes.get('/', (req, res) => {
	res.send('Base route to get dollars');
});

routes.get('/get-dollar-blue-value', async (req, res) => {
	try {
		const dollarBlueValue = await getDollarBlueValue();

		res.status(200).json(dollarBlueValue);
	} catch (error) {
		res.json(error.message);
	}
});

export const dollar = routes;
