import express from 'express';
import cors from 'cors';
import { account, auth, base, basicData, budgets, dollar, taxes } from './routes';
import { getDollarBlueValue, updateDollarBlueValue } from './routes/dollar/use-cases/dollar-blue-value';
// import { updateScheduleWeekDays } from './services/update-schedule';
// import { keepAlive } from './services/keep-alive';

class App {
  public server;
  public paths;

  constructor() {
    this.server = express();
    this.middlewares();
    this.paths = {
      base: '/',
      auth: '/api/auth',
      dollar: '/api/dollar',
      taxes: '/api/taxes',
      basicInfo: '/api/basic-data',
      budgets: '/api/budgets',
      accounts: '/api/accounts',
    };
    this.routes();
    //	keepAlive();
    // updateScheduleWeekDays(600000);
    this.updateDollarBlue();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(this.paths.auth, auth);
    this.server.use(this.paths.dollar, dollar);
    this.server.use(this.paths.taxes, taxes);
    this.server.use(this.paths.basicInfo, basicData);
    this.server.use(this.paths.budgets, budgets);
    this.server.use(this.paths.base, base);
    this.server.use(this.paths.accounts, account);
  }

  async updateDollarBlue() {
    const value = await getDollarBlueValue();
    if (value) {
      await updateDollarBlueValue();
    } else {
      return;
    }
  }
}

export default new App().server;
