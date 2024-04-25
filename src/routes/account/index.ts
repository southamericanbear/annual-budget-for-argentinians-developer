import { createAccountTransactionValidator, createAccountValidator } from '../../utils';
import {
  createAccount,
  createAccountTransaction,
  deleteAccount,
  deleteAccountTransaction,
  getAccounts,
  getSpecificAccountById,
  getTransactionsByAccountId,
  updateAccount,
  updateAccountTransaction,
} from '../../controllers';
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
      currency: body.currency,
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

routes.get('/:id/transactions', jwtValidator, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTransactionsByAccountId(id);

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.post('/:id/transactions', createAccountTransactionValidator, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    body.accountId = id;
    body.userId = req.body.user.userId;
    delete body.user;

    const data = await createAccountTransaction(body);

    return res.status(200).json({ message: 'Transaction created', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.put('/:id/transactions/:transactionId', jwtValidator, async (req, res) => {
  try {
    const { id, transactionId } = req.params;
    const { body } = req;
    body.accountId = id;
    delete body.user;

    const data = await updateAccountTransaction(transactionId, body);

    return res.status(200).json({ message: 'Transaction updated', data });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.delete('/:id/transactions/:transactionId', jwtValidator, async (req, res) => {
  try {
    const { transactionId } = req.params;
    await deleteAccountTransaction(transactionId);

    return res.status(200).json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const account = routes;
