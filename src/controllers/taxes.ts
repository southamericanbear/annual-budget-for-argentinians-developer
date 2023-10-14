import { getTotalTaxesMonth } from '../utils';
// import googleSheetsService from '../services/google-sheets';

export const getValueInvocesByMonthAndYear = async (
	year: string,
	month: string
): Promise<{
	numberOfInovices: number;
	totalInvoices: number;
}> => {
	const { numberOfInovices, totalInvoices } = await getTotalTaxesMonth(year, month);
	// 	await googleSheetsService.updateSpecificCell('budget!I40:I40', totalInvoices);
	// 	await googleSheetsService.updateSpecificCell('budget!J40:J40', numberOfInovices);

	return {
		numberOfInovices,
		totalInvoices,
	};
};
