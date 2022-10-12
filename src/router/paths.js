export const PATHS = {
  HOME: '/',
  AUTH: '/auth',
  MY_ROOMS: '/my-rooms',
  ALL_ROOMS: '/all-rooms',
  SESSION: '/session/:roomID',
};

export const PUBLIC_PATHS = [PATHS.AUTH];

export const VALID_PATHS = Object.values(PATHS);
