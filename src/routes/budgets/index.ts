import { Router, Request, Response } from 'express';
import { createBudgetValidation } from '../../utils';
import { getBudgets, getBudgetById, getTotalBudget, createBudget, updateBudget, deleteBudget } from '../../controllers';
import { jwtValidator } from '../../middlewares';
const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
	try {
		const budgets = await getBudgets(req.body.user.userId);
		res.status(200).json({ message: 'Budgets', budgets });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.get('/get-total', jwtValidator, async (req, res) => {
	try {
		const totalBudget = await getTotalBudget(req.body.user.userId);
		res.status(200).json({ message: 'Total budget', totalBudget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.get('/:budgetId', jwtValidator, async (req, res) => {
	const { budgetId } = req.params;

	try {
		const budget = await getBudgetById(budgetId, req.body.user.userId);
		res.status(200).json({ message: 'Budget', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.post('/', createBudgetValidation, async (req: Request, res: Response) => {
	try {
		const { body } = req;
		delete body.user;
		const budget = await createBudget(body);
		res.status(200).json({ message: 'Budget created', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.put('/:budgetId', jwtValidator, async (req, res) => {
	const { budgetId } = req.params;
	const { body } = req;
	const userId = req.body.user.userId;
	delete body.user;

	try {
		const budget = await updateBudget(budgetId, body, userId);
		res.status(200).json({ message: 'Budget updated', budget });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.delete('/:budgetId', jwtValidator, async (req, res) => {
	const { budgetId } = req.params;
	try {
		const budgetDeletedId = await deleteBudget(budgetId, req.body.user.userId);
		return res.status(200).json({ message: 'Budget deleted', budgetDeletedId });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

export const budgets = routes;
