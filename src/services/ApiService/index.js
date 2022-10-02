import { signUp, signIn, me } from './auth';
import { createRoom, getRooms } from './rooms';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
  createRoom,
};
