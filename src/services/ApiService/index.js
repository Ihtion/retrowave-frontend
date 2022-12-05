import { signUp, signIn, me, signInGoogle } from './auth';

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
  signInGoogle,
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
