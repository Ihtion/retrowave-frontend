import { signUp, signIn, me } from './auth';
import { createRoom, getRoomByKey, getRooms } from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  createRoom,
  getRoomByKey,
};
