import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getMyRooms,
  getAllRooms,
  addToMyRooms,
  removeFromMyRooms,
  deleteRoom,
  getRoomByName,
  updateRoom,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getMyRooms,
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomByName,
  addToMyRooms,
  removeFromMyRooms,
};
