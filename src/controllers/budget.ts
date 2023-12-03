import { budgetService } from '../services';
import { Budget } from '../types';

export const getBudgets = async (userId: string): Promise<Budget[]> => {
  const budgets = await budgetService.getBudgets(userId);
  return budgets as Budget[];
};

export const getBudgetById = async (budgetId: string, userId: string): Promise<Budget> => {
  const budget = await budgetService.getBudgetById(budgetId, userId);
  return budget as Budget;
};

export const getTotalBudget = async (userId: string): Promise<number> => {
  const totalBudget = await budgetService.getTotalBudget(userId);

  return totalBudget;
};

export const createBudget = async (payload: Budget): Promise<Budget> => {
  const budget = await budgetService.createBudget(payload);

  return budget as Budget;
};

export const updateBudget = async (budgetId: string, payload: Budget, userId: string): Promise<Budget> => {
  const budget = await budgetService.updateBudget(budgetId, payload, userId);

  return budget as Budget;
};

export const deleteBudget = async (budgetId: string, userId: string): Promise<string> => {
  const budgetDeletedId = await budgetService.deleteBudget(budgetId, userId);

  return budgetDeletedId;
};
