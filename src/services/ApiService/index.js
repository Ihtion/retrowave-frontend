import { signUp, signIn, me } from './auth';

import {
  createRoom,
  getRoomByKey,
  getRooms,
  getSavedRooms,
  addToSavedRooms,
  removeFromSavedRooms,
} from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  getSavedRooms,
  createRoom,
  getRoomByKey,
  addToSavedRooms,
  removeFromSavedRooms,
};
