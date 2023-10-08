export enum Category {
	DOLLAR = 'dollar',
	RENT = 'rent',
	SALARY = 'salary',
	OTHER = 'other',
}

export interface BasicData {
	id?: string;
	user_id: string;
	name: string;
	value: number;
	createAt?: Date;
	updateAt?: Date;
	category: Category;
}
