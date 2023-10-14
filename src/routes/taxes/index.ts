import { Request, Response, Router } from 'express';
import multer from 'multer';
import { jwtValidator } from '../../middlewares';
import { getTaxesStats, uploadInvoice } from './usecases/taxes';

const upload = multer({ storage: multer.memoryStorage() });

const routes = Router();

routes.get('/get-taxes-stats', jwtValidator, async (req, res) => {
	try {
		// await updateValueCellInvoices(year as string, month as string);
		const taxes = await getTaxesStats(req.body.user.userId);
		res.status(200).json(taxes);
	} catch (error) {
		res.status(404).send(error);
	}
});

// add middleware to check if the file is an image
routes.put('/upload-invoice', [upload.array('invoices'), jwtValidator], async (req: Request, res: Response) => {
	const { year, month } = req.query;
	const invoices = req.files as Express.Multer.File[];
	const userId = req.body.user.userId;
	delete req.body.user;
	try {
		await uploadInvoice(month as string, year as string, invoices, userId);
		return res.status(200).json({ message: 'invoices uploaded' });
	} catch (error) {
		res.status(500).send(error);
	}
});

export const taxes = routes;
