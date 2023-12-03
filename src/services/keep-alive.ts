/* eslint-disable no-console */
import axios from 'axios';

export const keepAlive = () => {
  setInterval(
    async () => {
      try {
        const response = await axios.get('https://annual-budget-for-argentinians-developers.onrender.com/api/dollar/get-dollar-blue-value');
        console.log('Keep alive called');
        return response;
      } catch (error) {
        throw new Error(error);
      }
    },
    // keep alive every 3 hours
    10800000
  );
};
