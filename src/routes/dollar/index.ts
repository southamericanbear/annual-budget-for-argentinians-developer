import { Router } from 'express';
import { getDollarBlueValue, updateDollarBlueValue } from './use-cases/dollar-blue-value';
import { jwtValidator } from '../../middlewares';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
	try {
		const value = await getDollarBlueValue();

		res.status(200).json(value);
	} catch (error) {
		res.json(error.message);
	}
});

routes.put('/update-dollar-blue-value', jwtValidator, async (req, res) => {
	try {
		const dollarBlueValue = await updateDollarBlueValue();

		res.status(200).json(dollarBlueValue);
	} catch (error) {
		res.json(error.message);
	}
});

export const dollar = routes;
