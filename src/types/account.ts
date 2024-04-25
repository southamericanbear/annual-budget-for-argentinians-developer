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
  currency?: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: AccountType;
}

export interface AccountTransaction {
  id?: string;
  accountId: string;
  userId: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}
