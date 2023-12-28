import { Account } from '@/types';
import { PrismaClient } from '@prisma/client';

export class AccountService {
  static prisma = new PrismaClient();

  async getAccounts(userId: string) {
    const accounts = await AccountService.prisma.account.findMany({ where: { user_id: userId } });

    return accounts;
  }

  async getAccountById(accountId: string, userId: string) {
    const account = await AccountService.prisma.account.findFirst({
      where: {
        AND: [{ id: accountId }, { user_id: userId }],
      },
    });
    return account;
  }

  async createAccount(data: Account) {
    const account = await AccountService.prisma.account.create({ data });
    return account;
  }

  async updateAccount(accountId: string, data: Account, userId: string) {
    if (!(await this.accountExists(accountId, userId))) {
      throw new Error('Account does not exist');
    }

    const account = await AccountService.prisma.account.update({
      where: { id: accountId },
      data,
    });
    return account;
  }

  async deleteAccount(accountId: string, userId: string) {
    if (!(await this.accountExists(accountId, userId))) {
      throw new Error('Account does not exist');
    }

    const account = await AccountService.prisma.account.delete({
      where: { id: accountId },
    });
    return account.id;
  }

  async accountExists(accountId: string, userId: string) {
    return await AccountService.prisma.account.findFirst({
      where: {
        AND: [{ id: accountId }, { user_id: userId }],
      },
    });
  }
}
