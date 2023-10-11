import { Router } from 'express';
import { getBasicData, getSpecificBasicDataById, createBasicData, updateBasicData, deleteBasicData } from '../../controllers';
import { jwtValidator } from '../../middlewares';

const routes = Router();

routes.get('/', jwtValidator, async (req, res) => {
	try {
		const data = await getBasicData();
		return res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const data = await getSpecificBasicDataById(id);
		return res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.post('/', async (req, res) => {
	try {
		const { body } = req;
		const data = await createBasicData(body);
		return res.status(200).json({ message: 'Basic data created', data });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req;
		const data = await updateBasicData(id, body);
		return res.status(200).json({ message: 'Basic data updated', data });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

routes.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const data = await deleteBasicData(id);
		return res.status(200).json({ message: 'Basic data deleted', data });
	} catch (error) {
		res.status(500).json(error.message);
	}
});

export const basicData = routes;
