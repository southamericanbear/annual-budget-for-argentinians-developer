import { SignupParams } from '../types';
import { authService } from '../services';

export const signup = async (payload: SignupParams) => {
	const user = await authService.signup(payload);
	return user;
};

export const login = async (email: string) => {
	const user = await authService.login(email);
	return user;
};
