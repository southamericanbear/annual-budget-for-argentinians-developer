import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const routes = Router();

const getFilePaths = (folderPath: string) => {
	const fileNames = fs.readdirSync(folderPath);
	const filePaths: string[] = [];

	for (const fileName of fileNames) {
		const filePath = path.join(folderPath, fileName);
		const fileStats = fs.statSync(filePath);

		if (fileStats.isFile()) {
			filePaths.push(filePath);
		}
	}

	return filePaths;
};

routes.get('/handle-taxes', (req, res) => {
	const result = getFilePaths('../../../../Documents/Monotribto 2023/junio');

	res.send({ result });
});

export const taxes = routes;
