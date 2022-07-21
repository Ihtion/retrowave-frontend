import { router } from '@/router';
import { PATHS } from '@/router/paths';
import { SET_IS_AUTH } from '@/store/mutationTypes';
import { ApiService, LocalStorage } from '@/services';

export const userStore = {
  state() {
    return {
      isAuth: false,
    };
  },
  mutations: {
    [SET_IS_AUTH](state, payload) {
      state.isAuth = payload.isAuth;
    },
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },
  actions: {
    async logout({ commit }) {
      LocalStorage.removeAuthToken();

      commit(SET_IS_AUTH, { isAuth: false });

      await router.push(PATHS.AUTH);
    },
    async login({ commit }, { email, password }) {
      const authToken = await ApiService.signIn({
        email,
        password,
      });

      LocalStorage.setAuthToken(authToken);
      commit(SET_IS_AUTH, { isAuth: true });

      await router.push(PATHS.HOME);
    },
  },
};
