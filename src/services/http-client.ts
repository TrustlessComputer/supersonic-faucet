import axios from 'axios';

const TIMEOUT = 5 * 60000;
const HEADERS = { 'Content-Type': 'application/json' };

const createAxiosInstance = ({ baseURL = '' }: { baseURL: string }) => {
  const instance = axios.create({
    baseURL,
    timeout: TIMEOUT,
    headers: {
      ...HEADERS,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // const accessToken = ''; // TO DO
      const accessToken = undefined;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => {
      const result = res?.data || res?.data?.data || res?.data?.result;
      if (res?.data?.count !== undefined) {
        return Promise.resolve({
          data: result,
          count: res.data.count,
        } as any);
      }
      const error = res?.data?.error;
      if (error && Object.keys(error).length) {
        return Promise.reject(error);
      }
      return Promise.resolve(result);
    },
    (error: any) => {
      if (!error.response) {
        return Promise.reject(error);
      } else {
        const response = error?.response?.data || error;
        const errorMessage =
          response?.error || error?.Message || JSON.stringify(error);
        return Promise.reject(errorMessage);
      }
    },
  );

  return instance;
};

export default createAxiosInstance;
