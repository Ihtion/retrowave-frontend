import { getRooms } from './rooms';
import { signUp, signIn, me } from './auth';

export const ApiService = {
  signUp,
  signIn,
  me,
  getRooms,
};
