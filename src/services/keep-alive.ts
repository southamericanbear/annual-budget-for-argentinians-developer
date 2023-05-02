/* eslint-disable no-console */
import axios from 'axios';

export const  keepAlive = () => {
  setInterval(async () => {
    try {
      const response = await axios.get('https://annual-budget-for-argentinians-developers.onrender.com/api/dollar/get-dollar-blue-value');
      console.log('Keep alive called')
      return response
    } catch (error) {
      throw new Error(error);
    }
  }, 120000); // 2 minutes in milliseconds
}
