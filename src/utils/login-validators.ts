import { check } from 'express-validator';
import { validationFields } from '../middlewares';

export const loginValidators = [check('email', 'Email is required').not().isEmpty(), check('email', 'Invalid email').isEmail(), check('password', 'Password is required').not().isEmpty(), validationFields];
