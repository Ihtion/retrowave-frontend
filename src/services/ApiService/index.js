import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getMyRooms,
  getAllRooms,
  addToMyRooms,
  removeFromMyRooms,
  deleteRoom,
  updateRoom,
  getRoomByID,
  checkRoomPassword,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRoomByID,
  getMyRooms,
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  addToMyRooms,
  removeFromMyRooms,
  checkRoomPassword,
};
