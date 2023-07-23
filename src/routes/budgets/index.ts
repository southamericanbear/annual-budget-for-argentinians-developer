import { Router, Request, Response } from 'express';
import { createBudgetValidation } from '../../utils';
import { getBudgets, getBudgetById, createBudget, updateBudget, deleteBudget } from '../../controllers';
const routes = Router();

routes.get('/', async (req, res) => {
	try {
		const budgets = await getBudgets();
		res.status(200).json({ message: 'Budgets', budgets });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.get('/:budgetId', async (req, res) => {
	const { budgetId } = req.params;
	try {
		const budget = await getBudgetById(budgetId);
		res.status(200).json({ message: 'Budget', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.post('/', createBudgetValidation, async (req: Request, res: Response) => {
	try {
		const { body } = req;
		const budget = await createBudget(body);
		res.status(200).json({ message: 'Budget created', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.put('/:budgetId', async (req, res) => {
	const { budgetId } = req.params;
	const { body } = req;
	try {
		const budget = await updateBudget(budgetId, body);
		res.status(200).json({ message: 'Budget updated', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.delete('/:budgetId', async (req, res) => {
	const { budgetId } = req.params;
	try {
		const budgetDeletedId = await deleteBudget(budgetId);
		return res.status(200).json({ message: 'Budget deleted', budgetDeletedId });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

export const budgets = routes;
