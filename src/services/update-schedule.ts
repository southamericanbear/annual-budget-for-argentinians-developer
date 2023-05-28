/* eslint-disable no-console */
import { updateValueCellDollarBlue } from '../controllers';

export const updateScheduleWeekDays = (interval: number) => {
	// Call the function every hour between 10am and 4pm from Monday to Friday
	const intervalId = setInterval(() => {
		const date = new Date();
		const dayOfWeek = date.getDay();
		const hourOfDay = date.getHours();
		if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 10 && hourOfDay <= 18) {
			// USAR LA API DE https://github.com/pjnovas/nolaborables PARA SABER SI HOY ES FERIADO O NO Y EVITAR LLAMAR A CAMBIAR EL DOLAR
			updateValueCellDollarBlue();
		} else {
			console.log('Hoy descansamos es fin de semana...🫠');
		}
	}, interval);

	// Stop the interval when the server is closed
	process.on('SIGINT', () => clearInterval(intervalId));
};

export const updateScheduleAllDays = (interval: number) => {
	setInterval(() => {
		updateValueCellDollarBlue();
	}, interval);
};
