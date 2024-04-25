import { Account, AccountTransaction } from '../../types';
import { PrismaClient } from '@prisma/client';

export class AccountService {
  static prisma = new PrismaClient();

  async getAccounts(userId: string) {
    const accounts = await AccountService.prisma.account.findMany({
      where: { active: true, userId },
      include: { transactions: true },
    });

    return accounts;
  }

  async getAccountById(accountId: string, userId: string) {
    const account = await AccountService.prisma.account.findFirst({
      where: {
        AND: [{ id: accountId }, { userId }, { active: true }],
      },
      include: {
        transactions: true,
      },
    });
    return account;
  }

  async createAccount(data: Account) {
    const account = await AccountService.prisma.account.create({
      data: {
        name: data.name,
        value: data.value,
        currency: data.currency,
        type: data.type,
        User: {
          connect: { id: data.user_id },
        }, // Add the missing 'User' property
      },
    });
    return account;
  }

  async updateAccount(accountId: string, data: Account, userId: string) {
    const accountExits = await this.accountExists(accountId, userId);

    if (!accountExits) {
      throw new Error('Account does not exist');
    }

    const account = await AccountService.prisma.account.update({
      where: { id: accountId },
      data,
    });

    if (data.value !== accountExits.value) {
      const payload = {
        accountId,
        value: data.value,
      };

      this.createTransaction(payload as AccountTransaction);
    }
    return account;
  }

  async deleteAccount(accountId: string, userId: string) {
    if (!(await this.accountExists(accountId, userId))) {
      throw new Error('Account does not exist');
    }

    const account = await AccountService.prisma.account.update({
      where: { id: accountId },
      data: {
        active: false,
      },
    });
    return account.id;
  }

  async accountExists(accountId: string, userId: string) {
    return await AccountService.prisma.account.findFirst({
      where: {
        AND: [{ id: accountId }, { userId }],
      },
    });
  }

  async getTransactionsByAccountId(accountId: string) {
    return await AccountService.prisma.accountTransaction.findMany({
      where: {
        accountId,
      },
    });
  }

  async createTransaction(transaction: AccountTransaction) {
    const accountTransaction = await AccountService.prisma.accountTransaction.create({
      data: transaction,
    });

    this.updateAccountValue(transaction.accountId, transaction.value);
    return accountTransaction;
  }

  async updateTransaction(transactionId: string, transaction: AccountTransaction) {
    const accountTransaction = await AccountService.prisma.accountTransaction.update({
      where: { id: transactionId },
      data: transaction,
    });

    this.updateAccountValue(accountTransaction.accountId, transaction.value);

    return accountTransaction;
  }

  async deleteTransaction(transactionId: string) {
    return await AccountService.prisma.accountTransaction.delete({
      where: { id: transactionId },
    });
  }

  private async updateAccountValue(accountId: string, value: number) {
    await AccountService.prisma.account.update({
      where: { id: accountId },
      data: { value },
    });
  }
}

export const accountService = new AccountService();
