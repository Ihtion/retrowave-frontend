import { store } from '@/store';
import { PATHS, PUBLIC_PATHS, VALID_PATHS } from '@/router/paths';

const isPathValid = (path) => {
  if (VALID_PATHS.includes(path)) {
    return true;
  }

  // /session/1 => /session
  return path.split('/').slice(0, -1).join('/') === '/session';
};

export const handleAppLaunch = async (to, from, next) => {
  let isInitialized = store.getters.isAppInitialized;

  if (!isInitialized) {
    await store.dispatch('initializeApp');
  }

  next();
};

export const handleAuth = (to, from, next) => {
  const isAuth = store.getters.isAuth;

  if (isAuth && to.path === PATHS.AUTH) {
    return next(PATHS.HOME);
  }

  const authRequired = !PUBLIC_PATHS.includes(to.path);

  if (authRequired && !isAuth && isPathValid(to.path)) {
    return next(PATHS.AUTH);
  }

  next();
};
