import { getDollarBlue as getDollarBlueService } from '../../../services';
import { basicDataService } from '../../../services';

export const getDollarBlueValue = async () => {
	try {
		const { value } = await basicDataService.getDollarBlueValue();
		return value;
	} catch (error) {
		return error;
	}
};

export const updateDollarBlueValue = async () => {
	try {
		const venta = await getDollarBlueService();
		await basicDataService.updateDollarBlueValue(venta);
	} catch (error) {
		return error;
	}
};
