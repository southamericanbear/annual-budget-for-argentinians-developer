import { jwtValidator } from '../../middlewares';
import { Router } from 'express';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
  try {
    res.status(200).json({ message: 'Account route' });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const account = routes;
