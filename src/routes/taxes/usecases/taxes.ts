import FirebaseService from '../../../services/firebase-service';
import { taxesService } from '../../../services';
import { getValueInvocesByMonthAndYear } from '../../../controllers/taxes';

export const getTaxesStats = async (userId: string) => {
	const taxes = await taxesService.getTaxes(userId);
	return taxes;
};

export const uploadInvoice = async (month: string, year: string, invoices: Express.Multer.File[], userId: string) => {
	try {
		const firebaseService = new FirebaseService();
		await firebaseService.uploadFiles('invoices', month as string, year as string, invoices);
		const { numberOfInovices, totalInvoices } = await getValueInvocesByMonthAndYear(year as string, month as string);
		await taxesService.updateTaxes(numberOfInovices, totalInvoices, userId, year as string, month as string);
	} catch (error) {
		return error;
	}
};
