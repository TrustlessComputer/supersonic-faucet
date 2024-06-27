import { API_URL, API_KEY } from '@/config';
import createAxiosInstance from '@/services/http-client';

const apiClient = createAxiosInstance({
  baseURL: `${API_URL}`,
});

export type IPostFaucet = {
  recipient_address: string;
};

const getFaucet = async ({ recipient_address }: IPostFaucet) => {
  try {
    const result: any = await apiClient.post(
      `/send-eth`,
      {
        network_type: 'TESTNET',
        recipient_address: recipient_address,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
      },
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const API = {
  getFaucet,
};

export default API;
