import { updateValueCellDollarBlue } from '../controllers';

export const updateScheduleWeekDays = () => {
	// Call the function every hour between 10am and 4pm from Monday to Friday
	const intervalId = setInterval(() => {
		const date = new Date();
		const dayOfWeek = date.getDay();
		const hourOfDay = date.getHours();
		if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 10 && hourOfDay <= 16) {
			updateValueCellDollarBlue();
		}
	}, 3600000);

	// Stop the interval when the server is closed
	process.on('SIGINT', () => clearInterval(intervalId));
};

export const updateScheduleAllDays = (interval: number) => {
	setInterval(() => {
		updateValueCellDollarBlue();
	}, interval);
};
