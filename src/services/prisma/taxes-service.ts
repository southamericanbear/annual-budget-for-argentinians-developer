import { PrismaClient } from '@prisma/client';

export class TaxesService {
  static prisma = new PrismaClient();

  async getTaxes(userId: string) {
    const taxes = await TaxesService.prisma.taxes.findMany({
      where: {
        userId,
      },
    });

    return taxes;
  }

  async updateTaxes(numberOfInvoice: number, totalInvoice: number, userId: string, year: string, month: string) {
    const taxMonth = await TaxesService.prisma.taxes.findFirst({
      where: {
        AND: [{ year: year }, { month: month }, { userId }],
      },
    });

    if (!taxMonth) {
      await TaxesService.prisma.taxes.create({
        data: {
          invoicesAmount: numberOfInvoice,
          value: totalInvoice,
          year,
          month,
          userId,
        },
      });
    }

    await TaxesService.prisma.taxes.update({
      where: {
        id: taxMonth.id,
      },
      data: {
        ...taxMonth,
        invoicesAmount: numberOfInvoice,
        value: totalInvoice,
        updatedAt: new Date(),
      },
    });
  }
}

export const taxesService = new TaxesService();
