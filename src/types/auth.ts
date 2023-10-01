enum UserType {
	ADMIN = 'admin',
	USER = 'user',
}

export interface SignupParams {
	name: string;
	email: string;
	password: string;
	type?: UserType;
}

export interface LoginParams {
	email: string;
	password: string;
}
