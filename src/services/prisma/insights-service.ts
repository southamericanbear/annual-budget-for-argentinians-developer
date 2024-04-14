import { PrismaClient } from '@prisma/client';

export class InsightsService {
  static prisma = new PrismaClient();

  async getInsightsData(userId: string) {
    const [basicData, accounts] = await Promise.all([
      InsightsService.prisma.basicData.findMany({
        where: {
          userId,
        },
        select: {
          name: true,
          value: true,
          currency: true,
          id: true,
          updatedAt: true,
        },
      }),
      InsightsService.prisma.account.findMany({
        where: {
          userId,
        },
        select: {
          id: true,
          name: true,
          value: true,
          type: true,
          updatedAt: true,
        },
      }),
    ]);

    return { basicData, accounts };
  }
}

export const insightsService = new InsightsService();
