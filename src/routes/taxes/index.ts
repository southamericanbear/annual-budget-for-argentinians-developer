import { Router } from 'express';
import { updateValueCellInvoices } from '../../controllers';

const routes = Router();

routes.get('/get-taxes-stats', async (req, res) => {
	const { year, month } = req.query;

	try {
		await updateValueCellInvoices(year as string, month as string);
		res.status(200).send('value updated');
	} catch (error) {
		res.status(404).send(error);
	}
});

export const taxes = routes;
