import { createRouter, createWebHistory } from 'vue-router';

import { PATHS } from '@/router/paths';
import { handleAppLaunch, handleAuth } from '@/router/handlers';

import LoginPage from '@/components/LoginPage';
import RoomsPage from '@/components/RoomsPage';
import GroomingSession from '@/components/GroomingSession';

const routes = [
  { path: '/:catchAll(.*)', redirect: PATHS.HOME },
  { path: PATHS.HOME, name: 'Home', redirect: PATHS.MY_ROOMS },
  { path: PATHS.AUTH, name: 'LoginPage', component: LoginPage },
  {
    path: PATHS.MY_ROOMS,
    name: 'MyRooms',
    component: RoomsPage,
  },
  {
    path: PATHS.ALL_ROOMS,
    name: 'AllRooms',
    component: RoomsPage,
  },
  {
    path: PATHS.SESSION,
    name: 'Session',
    component: GroomingSession,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(handleAppLaunch);
router.beforeEach(handleAuth);

export { router };
