import { Request, Response } from 'express';

export const checkFile = async (req: Request | any, res: Response | any, next: () => void) => {
	if (!req.files || Object.keys(req.files.invoices).length === 0 || !req.files.invoices) {
		return res.status(400).send({ msg: 'No files were uploaded.' });
	}

	if (Array.isArray(req.files.invoices)) {
		for (const invoice of req.files.invoices) {
			if (invoice.mimetype !== 'application/pdf') {
				return res.status(400).send({ msg: 'Only pdf files are allowed.' });
			}
		}
	} else {
		if (req.files.invoices.mimetype !== 'application/pdf') {
			return res.status(400).send({ msg: 'Only pdf files are allowed.' });
		}
	}

	next();
};
