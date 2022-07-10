import axios from 'axios';

import { SERVER_HOST, ServerHttpRoutes } from '@/constants';
import { LocalStorage } from '@/services';

export const signUp = async ({ email, password }) =>
  axios.post(`${SERVER_HOST}${ServerHttpRoutes.USER}`, { email, password });

export const signIn = async ({ email, password }) => {
  const response = await axios.post(`${SERVER_HOST}${ServerHttpRoutes.LOGIN}`, {
    email,
    password,
  });

  return response.data.access_token;
};

export const me = async () => {
  const authToken = LocalStorage.getAuthToken();

  return axios.get(`${SERVER_HOST}${ServerHttpRoutes.ME}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};
