import { Router } from 'express';
import { updateValueCellInvoices, uploadFile } from '../../controllers';
import multer from 'multer';

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
	const invoices = req.files as Express.Multer.File[];
	try {
		const urls = await uploadFile('june', '2023', invoices);
		return res.status(200).json({ message: 'invoices uploaded', urls });
	} catch (error) {
		return error;
	}
});

export const taxes = routes;
