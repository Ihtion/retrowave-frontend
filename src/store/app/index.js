import { ApiService } from '@/services';

import {
  SET_APP_IS_INITIALIZED,
  SET_IS_AUTH,
  SET_USER,
} from '@/store/mutationTypes';

export const appStore = {
  state() {
    return {
      isInitialized: false,
    };
  },
  mutations: {
    [SET_APP_IS_INITIALIZED](state) {
      state.isInitialized = true;
    },
  },
  actions: {
    async initializeApp({ commit }) {
      try {
        const user = await ApiService.me();

        commit(SET_IS_AUTH, { isAuth: true });
        commit(SET_USER, { user: { id: user.id, email: user.email } });
      } catch (error) {
        commit(SET_IS_AUTH, { isAuth: false });
      } finally {
        commit(SET_APP_IS_INITIALIZED);
      }
    },
  },
  getters: {
    isAppInitialized(state) {
      return state.isInitialized;
    },
  },
};
