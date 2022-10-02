import axios from 'axios';

import { LocalStorage } from '@/services';
import { SERVER_HOST, ServerHttpRoutes } from '@/constants';

export const getRooms = async () => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(`${SERVER_HOST}${ServerHttpRoutes.ROOMS}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

export const createRoom = async (payload) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.post(
    `${SERVER_HOST}${ServerHttpRoutes.ROOMS}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
