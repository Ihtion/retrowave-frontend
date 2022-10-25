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

export const deleteRoom = async (roomID) => {
  const authToken = LocalStorage.getAuthToken();

  await axios.delete(`${SERVER_HOST}${ServerHttpRoutes.ROOMS}/${roomID}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export const getSavedRooms = async () => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(
    `${SERVER_HOST}${ServerHttpRoutes.ALL_ROOMS}/saved`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

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

export const getRoomByKey = async (key) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(
    `${SERVER_HOST}${ServerHttpRoutes.ALL_ROOMS}/${key}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const addToSavedRooms = async (roomKey) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.post(
    `${SERVER_HOST}${ServerHttpRoutes.ALL_ROOMS}/saved${roomKey}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const removeFromSavedRooms = async (roomKey) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.delete(
    `${SERVER_HOST}${ServerHttpRoutes.ALL_ROOMS}/saved${roomKey}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
