import { check } from 'express-validator';
import { validationFields, jwtValidator } from '../middlewares';

export const createBudgetValidation = [
  jwtValidator,
  check('name', 'Name is required').not().isEmpty(),
  check('budgetDetails', 'Budget details is required').not().isEmpty(),
  check('budgetTotal', 'Budget total is required').not().isEmpty(),
  validationFields,
];

export const createBasicDataValidator = [
  jwtValidator,
  check('name', 'Name is required').not().isEmpty(),
  check('value', 'Value is required').isNumeric(),
  check('category', 'Category is required').not().isEmpty(),
  check('currency', 'Currency is required').not().isEmpty().isString(),
  validationFields,
];

export const createAccountValidator = [
  jwtValidator,
  check('name', 'Name is required').not().isEmpty(),
  check('value', 'Value is required').isFloat(),
  check('createdAt', 'Creation date is required').optional().isISO8601(),
  check('updatedAt', 'Update date is required').optional().isISO8601(),
  check('type', 'Account type is required').not().isEmpty().isIn(['cash', 'bank', 'credit', 'investing', 'savings', 'travel', 'other']),
  validationFields,
];

export const createAccountTransactionValidator = [
  jwtValidator,
  check('value', 'Transaction value is required').isFloat(),
  check('createdAt', 'Creation date is optional and must be a valid ISO 8601 date').optional().isISO8601(),
  check('updatedAt', 'Update date is optional and must be a valid ISO 8601 date').optional().isISO8601(),
  validationFields,
];
