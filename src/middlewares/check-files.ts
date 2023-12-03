import { Request, Response } from 'express';

export const checkFile = async (req: Request | any, res: Response | any, next: () => void) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ msg: 'No files were uploaded.' });
  }

  const invoiceFiles = req.files.filter((file: any) => file.fieldname === 'invoices');

  if (invoiceFiles.length === 0) {
    return res.status(400).send({ msg: 'No invoice files were uploaded.' });
  }

  for (const invoice of invoiceFiles) {
    if (invoice.mimetype !== 'application/pdf') {
      return res.status(400).send({ msg: 'Only pdf files are allowed.' });
    }
  }

  next();
};
