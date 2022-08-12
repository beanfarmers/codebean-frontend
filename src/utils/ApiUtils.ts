import axios, { AxiosError, AxiosInstance } from 'axios';

import { API_URL_V1 } from '@src/utils/Constants';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL_V1,
});

api.interceptors.response.use(
  (res) => {
    console.log('hi');
    return res;
  },
  (err) => {
    if (err instanceof AxiosError) {
      if (err.response) {
        console.error(err.response.data);
        console.error(err.response.status);
        console.error(err.response.headers);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error('Error', err.message);
      }
      console.error(err.config);
    } else {
      console.error(err);
    }
    throw err;
  },
);
