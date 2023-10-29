import { check } from 'express-validator';
import { validationFields, jwtValidator } from '../middlewares';

export const createBudgetValidation = [jwtValidator, check('name', 'Name is required').not().isEmpty(), check('budgetDetails', 'Budget details is required').not().isEmpty(), check('budgetTotal', 'Budget total is required').not().isEmpty(), validationFields];

export const createBasicDataValidator = [jwtValidator, check('name', 'Name is required').not().isEmpty(), check('value', 'Value is required').isNumeric(), check('category', 'Category is required').not().isEmpty(), check('currency', 'Currency is required').not().isEmpty().isString(), validationFields];
