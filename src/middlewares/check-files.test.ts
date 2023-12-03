import request from 'supertest';
import express, { Request, Response } from 'express';
import { checkFile } from '../middlewares'; // Update with the correct path
import { injectMockFiles } from '../test';

const app = express();

app.use(express.json());

app.put('/upload-invoice', [injectMockFiles, checkFile], (req: Request, res: Response) => {
  res.status(200).send('Invoices uploaded successfully');
});

describe('checkFile Middleware', () => {
  it('should return 400 if no files are uploaded', async () => {
    const res = await request(app).put('/upload-invoice?useMockFiles=false').set('Content-Type', 'multipart/form-data');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ msg: 'No files were uploaded.' });
  });

  it('should return 400 if no invoice files are uploaded', async () => {
    const res = await request(app)
      .put('/upload-invoice?useMockFiles=false&useMockFileError=true')
      .set('Content-Type', 'multipart/form-data')
      .attach('not-invoices', './src/middlewares/check-files.test.ts');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ msg: 'No invoice files were uploaded.' });
  });

  it('should return 400 if a non-PDF file is uploaded', async () => {
    const res = await request(app)
      .put('/upload-invoice?useMockFiles=false&useNotPdf=true')
      .set('Content-Type', 'multipart/form-data')
      .attach('invoices', './src/middlewares/check-files.test.ts');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ msg: 'Only pdf files are allowed.' });
  });

  it('should allow upload if a PDF invoice file is uploaded', async () => {
    const res = await request(app).put('/upload-invoice?useMockFiles=true');

    expect(res.status).toBe(200);
    expect(res.text).toBe('Invoices uploaded successfully');
  });
});
