import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getMyRooms,
  getAllRooms,
  addToMyRooms,
  removeFromMyRooms,
  deleteRoom,
  updateRoom,
  getByID,
  checkRoomPassword,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getByID,
  getMyRooms,
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  addToMyRooms,
  removeFromMyRooms,
  checkRoomPassword,
};
