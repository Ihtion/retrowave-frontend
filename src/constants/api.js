export const SERVER_HOST = process.env.VUE_APP_SERVER_HOST;

export const ServerHttpRoutes = {
  USER: '/user',
  LOGIN: '/auth/login',
  ME: '/auth/me',
  ROOMS: '/rooms',
  MY_ROOMS: '/rooms/my',
  ALL_ROOMS: '/rooms/all',
  CHECK_ROOM_PASSWORD: '/rooms/check-password',
};
