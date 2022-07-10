import { createStore } from 'vuex';

import { appStore } from '@/store/app';
import { userStore } from '@/store/user';

export const store = createStore({
  modules: {
    app: appStore,
    user: userStore,
  },
});
