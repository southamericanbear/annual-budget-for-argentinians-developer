import { Router } from 'express';
import { getTotalTaxesMonth } from '../../utils/taxes';
const routes = Router();

routes.get('/get-taxes-stats', async (req, res) => {
	const { year, month } = req.query;

	try {
		const total = await getTotalTaxesMonth(year as string, month as string);
		res.status(200).send({ total });
	} catch (error) {
		res.status(404).send(error);
	}
});

export const taxes = routes;
