import { Router } from 'express';
import { signup } from './use-cases';

const routes = Router();

routes.post('/signup', async (req, res) => {
	try {
		const user = await signup(req.body);
		res.status(201).json({
			user,
			message: 'User created successfully',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error,
		});
	}
});

routes.post('/login', async (req, res) => {
	res.send('login');
});

export const auth = routes;
