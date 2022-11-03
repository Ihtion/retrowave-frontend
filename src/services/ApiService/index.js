import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getRooms,
  getSavedRooms,
  addToSavedRooms,
  removeFromSavedRooms,
  deleteRoom,
  getRoomByName,
  updateRoom,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  getSavedRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomByName,
  addToSavedRooms,
  removeFromSavedRooms,
};
