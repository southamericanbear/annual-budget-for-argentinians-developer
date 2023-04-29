import axios from 'axios';

export const getDollarBlueValue = async () => {
	try {
		const { data } = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares/blue');

		return data;
	} catch (error) {
		return error;
	}
};
