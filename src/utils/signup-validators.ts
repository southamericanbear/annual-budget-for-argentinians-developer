import { check } from 'express-validator';
import { validationFields } from '../middlewares';
import { emailExistsValidator } from './db-validators';

export const signupValidators = [check('email').custom(emailExistsValidator), check('name', 'Name is required').not().isEmpty(), check('email', 'Email is required').not().isEmpty(), check('email', 'Invalid email').isEmail(), check('password', 'Password is required').not().isEmpty(), validationFields];
