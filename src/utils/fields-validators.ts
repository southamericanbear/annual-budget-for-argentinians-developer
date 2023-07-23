import { check } from 'express-validator';
import { validationFields } from '../middlewares';

export const createBudgetValidation = [check('name', 'Name is required').not().isEmpty(), check('budgetDetails', 'Budget details is required').not().isEmpty(), check('budgetTotal', 'Budget total is required').not().isEmpty(), validationFields];
