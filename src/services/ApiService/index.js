import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getRoomByKey,
  getRooms,
  getSavedRooms,
  addToSavedRooms,
  removeFromSavedRooms,
  deleteRoom,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  getSavedRooms,
  createRoom,
  deleteRoom,
  getRoomByKey,
  addToSavedRooms,
  removeFromSavedRooms,
};
