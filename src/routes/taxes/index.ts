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

routes.get('/get-invoices', async (req, res) => {
	const firebaseService = new FirebaseService();
	try {
		const invoices = await firebaseService.getFiles('invoices/2023/june');
		res.status(200).send(invoices);
	} catch (error) {
		return error;
	}
});

routes.post('/upload-invoice', upload.array('invoices'), async (req, res) => {
	const invoices = req.files as Express.Multer.File[];
	const firebaseService = new FirebaseService();
	try {
		const urls = await firebaseService.uploadFiles('invoices', 'june', '2023', invoices);
		return res.status(200).json({ message: 'invoices uploaded', urls });
	} catch (error) {
		return error;
	}
});

export const taxes = routes;
