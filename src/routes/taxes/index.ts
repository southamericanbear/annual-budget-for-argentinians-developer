import { Router } from 'express';
import multer from 'multer';
import { updateValueCellInvoices } from '../../controllers';
import FirebaseService from '../../services/firebase-service';

const upload = multer({ storage: multer.memoryStorage() });

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

routes.post('/upload-invoice', upload.array('invoices'), async (req, res) => {
	const { year, month } = req.query;
	const invoices = req.files as Express.Multer.File[];
	const firebaseService = new FirebaseService();
	try {
		await firebaseService.uploadFiles('invoices', month as string, year as string, invoices);
		return res.status(200).json({ message: 'invoices uploaded' });
	} catch (error) {
		return error;
	}
});

export const taxes = routes;
