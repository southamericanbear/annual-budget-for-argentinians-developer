import { getTotalTaxesMonth } from '../utils';
import googleSheetsService from '../services/google-sheets';

export const updateValueCellInvoices = async (year: string, month: string): Promise<void> => {
	const { numberOfInovices, totalInvoices } = await getTotalTaxesMonth(year, month);
	await googleSheetsService.updateSpecificCell('budget!I40:I40', totalInvoices);
	await googleSheetsService.updateSpecificCell('budget!J40:J40', numberOfInovices);
};
