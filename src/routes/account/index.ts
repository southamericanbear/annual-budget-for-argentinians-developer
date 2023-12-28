import { createAccountValidator } from '../../utils';
import { createAccount, deleteAccount, getAccounts, getSpecificAccountById, updateAccount } from '../../controllers';
import { jwtValidator } from '../../middlewares';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
  try {
    const data = await getAccounts(req.body.user.userId);

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.get('/:id', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSpecificAccountById(id, req.body.user.userId);

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.post('/', createAccountValidator, async (req: Request, res: Response) => {
  try {
    const { body } = req;
    body.user_id = req.body.user.userId;
    const payload = {
      name: body.name,
      value: body.value,
      user_id: body.user_id,
      type: body.type,
    };

    const data = await createAccount(payload);

    return res.status(200).json({ message: 'Account created', data });
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

    const data = await updateAccount(id, body, userId);

    return res.status(200).json({ message: 'Account updated', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.delete('/:id', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteAccount(id, req.body.user.userId);

    return res.status(200).json({ message: 'Account deleted', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const account = routes;
