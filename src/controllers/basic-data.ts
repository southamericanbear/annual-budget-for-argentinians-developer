import { BasicData } from '@prisma/client';
import { basicDataService } from '../services';

export const getBasicData = async (userId: string) => {
  const basicData = await basicDataService.getBasicData(userId);
  return basicData;
};

export const getSpecificBasicDataById = async (id: string, userId: string) => {
  const basicData = await basicDataService.getSpecificBasicDataById(id, userId);
  return basicData;
};

export const createBasicData = async (data: BasicData) => {
  const basicData = await basicDataService.createBasicData(data);
  return basicData;
};

export const updateBasicData = async (id: string, data: BasicData, userId: string) => {
  const basicData = await basicDataService.updateBasicData(id, data, userId);
  return basicData;
};

export const deleteBasicData = async (id: string, userId: string) => {
  const basicData = await basicDataService.deleteBasicData(id, userId);
  return basicData;
};
