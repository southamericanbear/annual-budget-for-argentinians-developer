export const mockFiles = [
  {
    fieldname: 'invoices',
    originalname: '20352699099_011_00001_00000300.pdf',
    encoding: '7bit',
    mimetype: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4 mock pdf content for file 1', 'binary'),
    size: 55360, // This is a mock size
  },
  {
    fieldname: 'invoices',
    originalname: '20352699099_011_00001_00000301.pdf',
    encoding: '7bit',
    mimetype: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4 mock pdf content for file 2', 'binary'),
    size: 55262, // This is a mock size
  },
];

export const mockFilesError = [
  {
    fieldname: 'letter',
    originalname: '20352699099_011_00001_00000300.pdf',
    encoding: '7bit',
    mimetype: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4 mock pdf content for file 1', 'binary'),
    size: 55360, // This is a mock size
  },
];

export const mockFileNotPDF = [
  {
    fieldname: 'invoices',
    originalname: '20352699099_011_00001_00000300.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    buffer: Buffer.from('%PDF-1.4 mock pdf content for file 1', 'binary'),
    size: 55360, // This is a mock size
  },
];

export const injectMockFiles = (req: any, res: any, next: any) => {
  // Check for a custom header or query parameter to decide whether to inject mock files
  if (req.query.useMockFiles === 'true') {
    req.files = mockFiles;
  } else if (req.query.useMockFileError === 'true') {
    req.files = mockFilesError;
  } else if (req.query.useNotPdf === 'true') {
    req.files = mockFileNotPDF;
  }
  next();
};
