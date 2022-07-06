import axios from 'axios';

import { SERVER_HOST, ServerHttpRoutes } from '@/constants';

export const signUp = ({ email, password }) =>
  axios.post(`${SERVER_HOST}/${ServerHttpRoutes.USER}`, { email, password });
