import pdf from 'pdf-parse';
import FirebaseService from '../../services/firebase-service';
import axios from 'axios';

export const getTotalTaxesMonth = async (year: string, month: string): Promise<{ numberOfInovices: number; totalInvoices: number }> => {
  try {
    const firebaseService = new FirebaseService();
    const invoicesUrls = await firebaseService.getFiles(`invoices/${year}/${month}`);

    if (!invoicesUrls.length) {
      return {
        numberOfInovices: 0,
        totalInvoices: 0,
      };
    }

    let subtotalNumber = 0;

    await Promise.all(
      invoicesUrls.map(async (invoiceUrl) => {
        const { data } = await axios(invoiceUrl, {
          responseType: 'arraybuffer',
        });
        const buffer = Buffer.from(data, 'binary');
        const { text } = await pdf(buffer);
        const lines = text.split('\n');

        for (const line of lines) {
          if (line.includes('Subtotal: $')) {
            const subtotalLineIndex = lines.indexOf(line) - 1;
            const parsedNumber = parseFloat(lines[subtotalLineIndex].replace(',', '.'));
            subtotalNumber += parsedNumber;
            break;
          }
        }
      })
    );

    return {
      numberOfInovices: invoicesUrls.length,
      totalInvoices: subtotalNumber,
    };
  } catch (error) {
    return error;
  }
};
