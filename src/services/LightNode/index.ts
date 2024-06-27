import { LIGHTNODE_API } from '@/config';
import createAxiosInstance from '@/services/http-client';
import { ILightNodeStatusResponse } from './type';

const apiClient = createAxiosInstance({
  baseURL: `${LIGHTNODE_API}`,
});

export type IGetLightNodeStatus = {
  currentPage?: number;
  numberOfItems?: number;
};

const getStatus = async ({
  currentPage,
  numberOfItems,
}: IGetLightNodeStatus) => {
  try {
    const result: ILightNodeStatusResponse = await apiClient.get(
      `/api/status/${currentPage}/${numberOfItems}`,
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const LightNodeAPI = {
  getStatus,
};

export default LightNodeAPI;
