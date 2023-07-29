import { PrismaClient } from '@prisma/client';
import { BasicData } from '../../types';

export class BasicDataService {
	static prisma = new PrismaClient();

	async getBasicData() {
		const basicData = await BasicDataService.prisma.basicData.findMany();
		return basicData;
	}

	async getSpecificBasicDataById(id: string) {
		const basicData = await BasicDataService.prisma.basicData.findUnique({
			where: {
				id,
			},
		});
		return basicData;
	}

	async createBasicData(data: BasicData) {
		const basicData = await BasicDataService.prisma.basicData.create({ data });
		return basicData;
	}

	async updateBasicData(id: string, data: BasicData) {
		const basicData = await BasicDataService.prisma.basicData.update({
			where: {
				id,
			},
			data,
		});
		return basicData;
	}

	async deleteBasicData(id: string) {
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
				name: 'dollar blue',
			},
		});
		return dollarBlueValue;
	}

	async updateDollarBlueValue(value: number) {
		await BasicDataService.prisma.basicData.updateMany({
			where: {
				name: 'dollar blue',
			},
			data: {
				value: value,
			},
		});
	}
}

export const basicDataService = new BasicDataService();
