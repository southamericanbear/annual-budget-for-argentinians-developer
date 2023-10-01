import { Router, Request, Response } from 'express';
import { signup, login } from './use-cases';
import { loginValidators, signupValidators } from '../../utils';

const routes = Router();

routes.post('/signup', signupValidators, async (req: Request, res: Response) => {
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

routes.post('/login', loginValidators, async (req: Request, res: Response) => {
	try {
		const {
			token,
			user: { name },
		} = await login(req.body);
		res.status(200).json({
			token,
			name,
			message: 'User logged in successfully',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error,
		});
	}
});

export const auth = routes;
