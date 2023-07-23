import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const routes = Router();

routes.get('/', async (req, res) => {
	try {
		const budgets = await prisma.budget.findMany();

		res.status(200).json({ message: 'Budgets', budgets });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.post('/create-budget', async (req, res) => {
	try {
		await prisma.budget.create({
			data: {
				...req.body,
			},
		});

		res.status(200).json({ message: 'Budget created' });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.put('/update-budget/:budgetId', async (req, res) => {
	const { budgetId } = req.params;

	try {
		await prisma.budget.update({
			where: { id: budgetId },
			data: {
				...req.body,
			},
		});

		res.status(200).json({ message: 'Budget updated' });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

export const budgets = routes;
