import { Router } from 'express';
import { getTotalTaxesMonth } from '../../utils/taxes';
const routes = Router();

routes.get('/handle-taxes', async (req, res) => {
	try {
		const total = await getTotalTaxesMonth('2023', 'junio');
		res.status(200).send({ total });
	} catch (error) {
		res.status(404).send(error);
	}
});

export const taxes = routes;
