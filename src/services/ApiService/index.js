import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getRooms,
  getSavedRooms,
  addToSavedRooms,
  removeFromSavedRooms,
  deleteRoom,
  getRoomByName,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  getSavedRooms,
  createRoom,
  deleteRoom,
  getRoomByName,
  addToSavedRooms,
  removeFromSavedRooms,
};
