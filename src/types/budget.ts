export interface Budget {
  name: string;
  user_id: string;
  budgetDetails: BudgetDetails;
  budgetTotal: number;
}

export interface BudgetDetails {
  [key: string]: number;
}
