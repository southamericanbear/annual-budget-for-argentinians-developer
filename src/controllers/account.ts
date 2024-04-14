import { Account, AccountTransaction } from '.././types';
import { accountService } from '../services';

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

export const getTransactionsByAccountId = async (accountId: string) => {
  const transactions = await accountService.getTransactionsByAccountId(accountId);
  return transactions;
};

export const createAccountTransaction = async (data: AccountTransaction) => {
  const transaction = await accountService.createTransaction(data);

  return transaction;
};

export const updateAccountTransaction = async (transactionId: string, data: AccountTransaction) => {
  const transaction = await accountService.updateTransaction(transactionId, data);
  return transaction;
};

export const deleteAccountTransaction = async (transactionId: string) => {
  const transaction = await accountService.deleteTransaction(transactionId);
  return transaction;
};
