import { PrismaClient } from '@prisma/client';
import { Budget } from '../../types';

export class BudgetService {
	static prisma = new PrismaClient();

	async getBudgets() {
		const budgets = await BudgetService.prisma.budget.findMany();

		return budgets;
	}

	async getBudgetById(budgetId: string) {
		const budget = await BudgetService.prisma.budget.findUnique({
			where: { id: budgetId },
		});
		return budget;
	}

	async getTotalBudget() {
		const {
			_sum: { budgetTotal },
		} = await BudgetService.prisma.budget.aggregate({
			_sum: { budgetTotal: true },
		});

		return budgetTotal;
	}

	async createBudget(data: Budget) {
		const budget = await BudgetService.prisma.budget.create({ data });
		return budget;
	}

	async updateBudget(budgetId: string, data: Budget) {
		const budget = await BudgetService.prisma.budget.update({
			where: { id: budgetId },
			data,
		});
		return budget;
	}

	async deleteBudget(budgetId: string) {
		const budget = await BudgetService.prisma.budget.delete({
			where: { id: budgetId },
		});
		return budget.id;
	}
}

export const budgetService = new BudgetService();
