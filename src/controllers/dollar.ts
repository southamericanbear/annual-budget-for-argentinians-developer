// /* eslint-disable no-console */
// import googleSheetsService from '../services/google-sheets';
// import { getDollarBlueValue } from '../routes/dollar/use-cases/dollar-blue-value';
// import { basicDataService } from '../services';

// export const getValueCellDollarBlue = async (): Promise<number> => {
// 	try {
// 		const value = await googleSheetsService.getSepecificCell('budget!I2:I2');
// 		return value.data.values[0][0];
// 	} catch (error) {
// 		console.log('😵 something went wrong');
// 		console.log(error);
// 	}
// };

// export const updateValueCellDollarBlue = async (): Promise<void> => {
// 	const { value: dollarBlueValueDB } = await basicDataService.getDollarBlueValue();
// 	try {
// 		const currentValue = await getValueCellDollarBlue();

// 		const { venta: value } = await getDollarBlueValue();

// 		if (currentValue === value.toString() && dollarBlueValueDB === value) {
// 			console.log('Dolar blue sin cambios...😮‍💨');
// 			return;
// 		} else {
// 			await googleSheetsService.updateSpecificCell('budget!I2:I2', value);
// 			await basicDataService.updateDollarBlueValue(value);

// 			console.log('Dolar blue actualizado...👀');
// 		}
// 	} catch (error) {
// 		console.log('😵 something went wrong');
// 		console.log(error);
// 	}
// };
