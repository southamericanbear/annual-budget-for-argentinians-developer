import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
	res.send('server is working');
});

export const base = routes;
