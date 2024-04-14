import { PrismaClient, BasicData } from '@prisma/client';

export class BasicDataService {
  static prisma = new PrismaClient();

  async getBasicData(userId: string) {
    const basicData = await BasicDataService.prisma.basicData.findMany({
      where: {
        userId,
      },
    });
    return basicData;
  }

  async getSpecificBasicDataById(id: string, userId: string) {
    const basicData = await BasicDataService.prisma.basicData.findFirst({
      where: {
        AND: [{ id: id }, { userId }],
      },
    });
    return basicData;
  }

  async createBasicData(data: BasicData) {
    const basicData = await BasicDataService.prisma.basicData.create({ data });
    return basicData;
  }

  async updateBasicData(id: string, data: BasicData, userId: string) {
    if (!this.basicDataExists(id, userId)) {
      throw new Error('Basic data does not exist');
    }

    const basicData = await BasicDataService.prisma.basicData.update({
      where: {
        id,
      },
      data,
    });
    return basicData;
  }

  async deleteBasicData(id: string, userId: string) {
    if (!this.basicDataExists(id, userId)) {
      throw new Error('Basic data does not exist');
    }

    const basicData = await BasicDataService.prisma.basicData.delete({
      where: {
        id,
      },
    });
    return basicData;
  }

  async getDollarBlueValue() {
    const dollarBlueValue = await BasicDataService.prisma.basicData.findFirst({
      where: {
        name: 'Dollar Blue',
      },
    });
    return dollarBlueValue;
  }

  async updateDollarBlueValue(value: number) {
    await BasicDataService.prisma.basicData.updateMany({
      where: {
        name: 'Dollar Blue',
      },
      data: {
        value: value,
      },
    });
  }

  async basicDataExists(id: string, userId: string) {
    return await BasicDataService.prisma.basicData.findFirst({
      where: {
        AND: [{ id: id }, { userId }],
      },
    });
  }
}

export const basicDataService = new BasicDataService();
