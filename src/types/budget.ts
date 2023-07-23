export interface Budget {
	name: string;
	budgetDetails: BudgetDetails;
	budgetTotal: number;
}

export interface BudgetDetails {
	[key: string]: number;
}
