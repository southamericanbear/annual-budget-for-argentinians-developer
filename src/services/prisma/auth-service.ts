import { PrismaClient } from '@prisma/client';
import { SignupParams } from '../../types';

export class AuthService {
	static prisma = new PrismaClient();

	async signup(payload: SignupParams) {
		const user = await AuthService.prisma.user.create({
			data: {
				name: payload.name,
				email: payload.email,
				password: payload.password,
				type: payload.type,
			},
		});

		return user;
	}
}

export const authService = new AuthService();
