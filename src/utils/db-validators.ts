import { authService } from '../services';

export const emailExistsValidator = async (email = '') => {
	const emailExists = await authService.findUser(email);

	if (emailExists) {
		throw new Error('Email is already registered');
	}
};
