import { budgetService } from '../services';
import { Budget } from '../types';

export const getBudgets = async (): Promise<Budget[]> => {
	const budgets = await budgetService.getBudgets();
	return budgets as Budget[];
};

export const getBudgetById = async (budgetId: string): Promise<Budget> => {
	const budget = await budgetService.getBudgetById(budgetId);
	return budget as Budget;
};

export const getTotalBudget = async (): Promise<number> => {
	const totalBudget = await budgetService.getTotalBudget();

	return totalBudget;
};

export const createBudget = async (payload: Budget): Promise<Budget> => {
	const budget = await budgetService.createBudget(payload);

	return budget as Budget;
};

export const updateBudget = async (budgetId: string, payload: Budget): Promise<Budget> => {
	const budget = await budgetService.updateBudget(budgetId, payload);

	return budget as Budget;
};

export const deleteBudget = async (budgetId: string): Promise<string> => {
	const budgetDeletedId = await budgetService.deleteBudget(budgetId);

	return budgetDeletedId;
};
