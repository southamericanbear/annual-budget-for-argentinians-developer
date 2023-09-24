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
