import axios from 'axios';

import { LocalStorage } from '@/services';
import { SERVER_HOST, ServerHttpRoutes } from '@/constants';

export const getAllRooms = async ({ limit, offset, search }) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(
    `${SERVER_HOST}${ServerHttpRoutes.ALL_ROOMS}`,
    {
      params: {
        limit,
        offset,
        search,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const getMyRooms = async () => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(
    `${SERVER_HOST}${ServerHttpRoutes.MY_ROOMS}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

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

export const updateRoom = async (roomID, payload) => {
  const authToken = LocalStorage.getAuthToken();

  await axios.patch(
    `${SERVER_HOST}${ServerHttpRoutes.ROOMS}/${roomID}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};

export const addToMyRooms = async (id) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.post(
    `${SERVER_HOST}${ServerHttpRoutes.MY_ROOMS}/${id}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const removeFromMyRooms = async (id) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.delete(
    `${SERVER_HOST}${ServerHttpRoutes.MY_ROOMS}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const getRoomByID = async (roomID) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.get(
    `${SERVER_HOST}${ServerHttpRoutes.ROOMS}/${roomID}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

export const checkRoomPassword = async (roomID, password) => {
  const authToken = LocalStorage.getAuthToken();

  const response = await axios.post(
    `${SERVER_HOST}${ServerHttpRoutes.CHECK_ROOM_PASSWORD}/${roomID}`,
    { password },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
