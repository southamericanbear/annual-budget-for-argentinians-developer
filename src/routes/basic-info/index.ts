import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { getDollarBlueValue } from '../dollar/use-cases/dollar-blue-value';
const prisma = new PrismaClient();

const routes = Router();

routes.get('/', async (req, res) => {
	try {
		const basicData = await prisma.basicData.findMany();

		res.status(200).json(basicData);
	} catch (error) {
		res.json(error.message);
	}
});

routes.post('/create-base-salary', async (req, res) => {
	try {
		const { baseSalary } = req.body;

		await prisma.basicData.create({
			data: {
				name: 'baseSalary',
				value: baseSalary,
			},
		});

		res.status(200).json({ message: 'Base salary created', baseSalary });
	} catch (error) {
		res.json(error.message);
	}
});

routes.put('/update-base-salary', async (req, res) => {
	try {
		const { baseSalary } = req.body;
		// await prisma.basicData.update({
		// 	where: { id: 1 },
		// 	data: { baseSalary },
		// });

		// const { venta } = await getDollarBlueValue();

		// await prisma.basicData.update({
		// 	where: { id: 1 },
		// 	data: { dollarBlue: venta },
		// });
		// res.status(200).json({ message: 'Base salary updated', baseSalary });
		res.send(baseSalary);
	} catch (error) {
		res.status(500).json(error.message);
	}
});

export const basicInfo = routes;
