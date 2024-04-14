import { BasicData } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { getBasicData, getSpecificBasicDataById, createBasicData, updateBasicData, deleteBasicData } from '../../controllers';
import { jwtValidator } from '../../middlewares';
import { createBasicDataValidator } from '../../utils';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
  try {
    const data = await getBasicData(req.body.user.userId);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.get('/:id', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSpecificBasicDataById(id, req.body.user.userId);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.post('/', createBasicDataValidator, async (req: Request, res: Response) => {
  try {
    const { body } = req;
    body.user_id = req.body.user.userId;
    const payload = {
      name: body.name,
      value: body.value,
      category: body.category,
      userId: body.user_id,
      currency: body.currency,
    };

    const data = await createBasicData(payload as BasicData);
    return res.status(200).json({ message: 'Basic data created', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.put('/:id', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const userId = req.body.user.userId;
    delete body.user;

    const data = await updateBasicData(id, body, userId);
    return res.status(200).json({ message: 'Basic data updated', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.delete('/:id', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteBasicData(id, req.body.user.userId);
    return res.status(200).json({ message: 'Basic data deleted', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const basicData = routes;
