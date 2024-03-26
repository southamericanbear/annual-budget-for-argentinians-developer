import { PrismaClient } from '@prisma/client';

export class InsightsService {
  static prisma = new PrismaClient();

  async getInsightsData(userId: string) {
    const [basicData, accounts] = await Promise.all([
      InsightsService.prisma.basicData.findMany({
        where: {
          user_id: userId,
        },
        select: {
          name: true,
          value: true,
          currency: true,
        },
      }),
      InsightsService.prisma.account.findMany({
        where: {
          user_id: userId,
        },
        select: {
          id: true,
          name: true,
          value: true,
          type: true,
        },
      }),
    ]);

    return { basicData, accounts };
  }
}

export const insightsService = new InsightsService();
