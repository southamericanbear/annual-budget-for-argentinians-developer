import { Router } from 'express';
import { signup } from './use-cases';

const routes = Router();

routes.post('/signup', async (req, res) => {
	const {} = req.body;
	const algo = await signup();
	res.send('signup');
});

routes.post('/login', async (req, res) => {
	res.send('login');
});

export const auth = routes;
