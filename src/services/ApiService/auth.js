import axios from 'axios';

import { LocalStorage } from '@/services';
import { SERVER_HOST, ServerHttpRoutes } from '@/constants';

export const signUp = async ({ email, password }) =>
  axios.post(`${SERVER_HOST}${ServerHttpRoutes.USER}`, { email, password });

export const signIn = async ({ email, password }) => {
  const response = await axios.post(`${SERVER_HOST}${ServerHttpRoutes.LOGIN}`, {
    email,
    password,
  });

  return response.data.access_token;
};

export const signInGoogle = async (payload) => {
  const response = await axios.post(
    `${SERVER_HOST}${ServerHttpRoutes.LOGIN_GOOGLE}`,
    payload
  );

  return response.data.access_token;
};

export const me = async () => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(`${SERVER_HOST}${ServerHttpRoutes.ME}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};
