import { hashPassword } from '../../../utils';
import { SignupParams } from '../../../types';
import { signup as signUpController } from '../../../controllers';

export const signup = async (newUser: SignupParams) => {
	const password = await hashPassword(newUser.password);

	const user = await signUpController({
		...newUser,
		password,
	});

	return user;
};
