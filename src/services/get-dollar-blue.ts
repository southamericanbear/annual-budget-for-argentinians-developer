import axios from 'axios';

export const getDollarBlue = async () => {
  try {
    const {
      data: { venta },
    } = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares/blue');
    return venta;
  } catch (error) {
    return error;
  }
};
