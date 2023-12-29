export enum AccountType {
  cash = 'cash',
  bank = 'bank',
  credit = 'credit',
  investing = 'investing',
  savings = 'savings',
  travel = 'travel',
  other = 'other',
}

export interface Account {
  id?: string;
  user_id: string;
  name: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
  type: AccountType;
}
