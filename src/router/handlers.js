import { store } from '@/store';
import { PATHS, PUBLIC_PATHS, VALID_PATHS } from '@/router/paths';

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

  const pathIsValid = VALID_PATHS.includes(to.path);
  const authRequired = !PUBLIC_PATHS.includes(to.path);

  if (authRequired && !isAuth && pathIsValid) {
    return next(PATHS.AUTH);
  }

  next();
};
