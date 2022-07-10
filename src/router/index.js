import { createRouter, createWebHistory } from 'vue-router';

import { PATHS } from '@/router/paths';
import { handleAuth, handleAppLaunch } from '@/router/handlers';

import Home from '@/components/Home';
import Loader from '@/components/Loader';
import NotFound from '@/components/NotFound';
import LoginPage from '@/components/LoginPage';

const routes = [
  { path: PATHS.HOME, name: 'Home', component: Home },
  { path: PATHS.AUTH, name: 'LoginPage', component: LoginPage },
  { path: PATHS.APP_LAUNCH, name: 'AppLaunch', component: Loader },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(handleAuth);
router.beforeEach(handleAppLaunch);

export { router, PATHS as ROUTER_PATHS };
