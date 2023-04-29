/* eslint-disable no-console */
import googleSheetsService from '../services/google-sheets';
import { getDollarBlueValue } from '../routes/dollar/use-cases/dollar-blue-value';

export const getValueCellDollarBlue = async (): Promise<number> => {
	try {
		const value = await googleSheetsService.getSepecificCell('budget!I2:I2');
		return value.data.values[0][0];
	} catch (error) {
		console.log('😵 something went wrong');
		console.log(error);
	}
};

export const updateValueCellDollarBlue = async (): Promise<void> => {
	try {
		const { venta: value } = await getDollarBlueValue();
		await googleSheetsService.updateSpecificCell('budget!I2:I2', value);
		console.log('Dolar blue actualizado...👀');
	} catch (error) {
		console.log('😵 something went wrong');
		console.log(error);
	}
};
