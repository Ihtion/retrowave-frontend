import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getMyRooms,
  getAllRooms,
  addToMyRooms,
  removeFromMyRooms,
  deleteRoom,
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
  addToMyRooms,
  removeFromMyRooms,
};
