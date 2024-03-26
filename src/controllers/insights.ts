import { insightsService } from './../services';

export const getInsightsData = async (userId: string) => {
  return await insightsService.getInsightsData(userId);
};
