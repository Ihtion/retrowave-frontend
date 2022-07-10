import { createRouter, createWebHistory } from 'vue-router';

import { PATHS } from '@/router/paths';
import { handleAppLaunch, handleAuth } from '@/router/handlers';

import Home from '@/components/Home';
import NotFound from '@/components/NotFound';
import LoginPage from '@/components/LoginPage';

const routes = [
  { path: PATHS.HOME, name: 'Home', component: Home },
  { path: PATHS.AUTH, name: 'LoginPage', component: LoginPage },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(handleAppLaunch);
router.beforeEach(handleAuth);

export { router };
