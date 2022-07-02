import { createRouter, createWebHistory } from 'vue-router';

// import Home from '@/components/Home';
// import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import NotFound from '@/components/NotFound';

import { PATHS } from '@/router/paths';

const routes = [
  { path: PATHS.ROOT, name: 'Home', component: SignUp },
  { path: PATHS.SIGN_IN, name: 'SignIn', component: SignUp },
  { path: PATHS.SIGN_UP, name: 'SignUp', component: SignUp },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, PATHS as ROUTER_PATHS };
