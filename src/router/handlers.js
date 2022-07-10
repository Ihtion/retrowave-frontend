import { store } from '@/store';
import { PATHS, PUBLIC_PATHS, VALID_PATHS } from '@/router/paths';

export const handleAppLaunch = (to, from, next) => {
  const isInitialized = store.getters.isAppInitialized;

  if (isInitialized && to.path === PATHS.APP_LAUNCH) {
    next(PATHS.HOME);
  }

  next();
};

export const handleAuth = (to, from, next) => {
  const pathIsValid = VALID_PATHS.includes(to.path);
  const authRequired = !PUBLIC_PATHS.includes(to.path);

  const isAuth = store.getters.isAuth;

  if (authRequired && !isAuth && pathIsValid) {
    next(PATHS.AUTH);
  }

  next();
};
