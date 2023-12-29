import { accountService } from '../services';
import { Account } from '../types';

export const getAccounts = async (userId: string) => {
  const accounts = await accountService.getAccounts(userId);
  return accounts;
};

export const getSpecificAccountById = async (accountId: string, userId: string) => {
  const account = await accountService.getAccountById(accountId, userId);
  return account;
};

export const createAccount = async (data: Account) => {
  const account = await accountService.createAccount(data);
  return account;
};

export const updateAccount = async (accountId: string, data: Account, userId: string) => {
  const account = await accountService.updateAccount(accountId, data, userId);
  return account;
};

export const deleteAccount = async (accountId: string, userId: string) => {
  const account = await accountService.deleteAccount(accountId, userId);
  return account;
};
