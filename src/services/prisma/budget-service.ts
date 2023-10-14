import { PrismaClient } from '@prisma/client';
import { Budget } from '../../types';

export class BudgetService {
	static prisma = new PrismaClient();

	async getBudgets(userId: string) {
		const budgets = await BudgetService.prisma.budget.findMany({ where: { user_id: userId } });

		return budgets;
	}

	async getBudgetById(budgetId: string, userId: string) {
		const budget = await BudgetService.prisma.budget.findFirst({
			where: {
				AND: [{ id: budgetId }, { user_id: userId }],
			},
		});
		return budget;
	}

	async getTotalBudget(userId: string) {
		const {
			_sum: { budgetTotal },
		} = await BudgetService.prisma.budget.aggregate({
			where: { user_id: userId },
			_sum: { budgetTotal: true },
		});

		return budgetTotal;
	}

	async createBudget(data: Budget) {
		const budget = await BudgetService.prisma.budget.create({ data });
		return budget;
	}

	async updateBudget(budgetId: string, data: Budget, userId: string) {
		if (!(await this.budgetExists(budgetId, userId))) {
			throw new Error('Budget does not exist');
		}

		const budget = await BudgetService.prisma.budget.update({
			where: { id: budgetId },
			data,
		});
		return budget;
	}

	async deleteBudget(budgetId: string, userId: string) {
		if (!(await this.budgetExists(budgetId, userId))) {
			throw new Error('Budget does not exist');
		}

		const budget = await BudgetService.prisma.budget.delete({
			where: { id: budgetId },
		});
		return budget.id;
	}

	async budgetExists(budgetId: string, userId: string) {
		return await BudgetService.prisma.budget.findFirst({
			where: {
				AND: [{ id: budgetId }, { user_id: userId }],
			},
		});
	}
}

export const budgetService = new BudgetService();
