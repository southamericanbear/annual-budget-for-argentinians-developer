import { Router } from 'express';
import { jwtValidator } from '../../middlewares';
import { getInsightsData } from '../../controllers';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
  try {
    const data = await getInsightsData(req.body.user.userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const insights = routes;
