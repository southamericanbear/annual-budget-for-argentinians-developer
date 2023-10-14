import axios from 'axios';
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
		const {
			data: { venta },
		} = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares/blue');

		await basicDataService.updateDollarBlueValue('35981cfb-3c76-46a3-85a3-a4c379987582', venta);
	} catch (error) {
		return error;
	}
};
