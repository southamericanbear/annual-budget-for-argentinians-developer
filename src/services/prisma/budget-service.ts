import { PrismaClient } from '@prisma/client';

class BudgetService {
	static prisma = new PrismaClient();
}

export const budgetService = new BudgetService();
