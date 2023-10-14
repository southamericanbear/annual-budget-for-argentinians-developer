import { PrismaClient } from '@prisma/client';
import { BasicData } from '../../types';

export class BasicDataService {
	static prisma = new PrismaClient();

	async getBasicData(userId: string) {
		const basicData = await BasicDataService.prisma.basicData.findMany({
			where: {
				user_id: userId,
			},
		});
		return basicData;
	}

	async getSpecificBasicDataById(id: string, userId: string) {
		const basicData = await BasicDataService.prisma.basicData.findFirst({
			where: {
				AND: [{ id: id }, { user_id: userId }],
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
				id: '35981cfb-3c76-46a3-85a3-a4c379987582',
			},
		});
		return dollarBlueValue;
	}

	async updateDollarBlueValue(id: string, value: number) {
		await BasicDataService.prisma.basicData.updateMany({
			where: {
				id: id,
			},
			data: {
				value: value,
			},
		});
	}

	async basicDataExists(id: string, userId: string) {
		return await BasicDataService.prisma.basicData.findFirst({
			where: {
				AND: [{ id: id }, { user_id: userId }],
			},
		});
	}
}

export const basicDataService = new BasicDataService();
