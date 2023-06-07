import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { getTotalTaxesMonth } from '../../utils/taxes';
import { checkFile, validationFields } from '../../middlewares';
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

routes.post(
	'/upload-invoice',
	[
		// validationJWT,
		checkFile,
		check('year', 'Year is required').not().isEmpty(),
		check('month', 'Month is required').not().isEmpty(),
		validationFields,
	],
	async (req: Request, res: Response) => {
		const { year, month } = req.query;
		// const cloudinaryUrl = process.env.CLOUDINARY_URL;

		res.send({ year, month });
	}
);

export const taxes = routes;
