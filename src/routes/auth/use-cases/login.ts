import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginParams } from '../../../types';
import { login as LoginController } from '../../../controllers';

export const login = async ({ email, password }: LoginParams) => {
	const user = await LoginController(email);

	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch) {
		throw new Error('Invalid password');
	}

	const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '5h' });

	return {
		token,
		user,
	};
};
