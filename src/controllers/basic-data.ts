import { basicDataService } from '../services';
import { BasicData } from '../types';

export const getBasicData = async () => {
	const basicData = await basicDataService.getBasicData();
	return basicData;
};

export const getSpecificBasicDataById = async (id: string) => {
	const basicData = await basicDataService.getSpecificBasicDataById(id);
	return basicData;
};

export const createBasicData = async (data: BasicData) => {
	const basicData = await basicDataService.createBasicData(data);
	return basicData;
};

export const updateBasicData = async (id: string, data: BasicData) => {
	const basicData = await basicDataService.updateBasicData(id, data);
	return basicData;
};

export const deleteBasicData = async (id: string) => {
	const basicData = await basicDataService.deleteBasicData(id);
	return basicData;
};
