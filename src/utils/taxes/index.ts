import { promises as fsPromises } from 'fs';
import { resolve as pathResolve } from 'path';
import pdf from 'pdf-parse';
export const getTotalTaxesMonth = async (year: string, month: string): Promise<{ numberOfInovices: number; totalInvoices: number }> => {
	const invoiceDir = `./local/${year}/${month}`;
	const invoiceFiles = await fsPromises.readdir(invoiceDir);

	let subtotalNumber = 0;

	await Promise.all(
		invoiceFiles.map(async (fileName) => {
			const invoicePath = pathResolve(invoiceDir, fileName);
			const dataBuffer = await fsPromises.readFile(invoicePath);
			const { text } = await pdf(dataBuffer);

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
	).catch((error) => {
		throw error;
	});

	return {
		numberOfInovices: invoiceFiles.length,
		totalInvoices: subtotalNumber,
	};
};
