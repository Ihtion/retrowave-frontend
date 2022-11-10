import { router } from '@/router';
import { PATHS } from '@/router/paths';
import { parseJwt } from '@/helpers/jwt';
import { ApiService, LocalStorage } from '@/services';
import { SET_IS_AUTH, SET_USER } from '@/store/mutationTypes';

export const userStore = {
  state() {
    return {
      isAuth: false,
      user: {
        id: null,
        email: null,
      },
    };
  },
  mutations: {
    [SET_IS_AUTH](state, payload) {
      state.isAuth = payload.isAuth;
    },
    [SET_USER](state, payload) {
      state.user.id = payload.user.id;
      state.user.email = payload.user.email;
    },
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
    userEmail(state) {
      return state.user.email;
    },
    userID(state) {
      return state.user.id;
    },
  },
  actions: {
    async logout({ commit }) {
      LocalStorage.removeAuthToken();

      commit(SET_IS_AUTH, { isAuth: false });
      commit(SET_USER, { user: { id: null, email: null } });

      await router.push(PATHS.AUTH);
    },
    async login({ commit }, { email, password }) {
      const authToken = await ApiService.signIn({
        email,
        password,
      });

      const { id: userID } = parseJwt(authToken);

      LocalStorage.setAuthToken(authToken);

      commit(SET_IS_AUTH, { isAuth: true });
      commit(SET_USER, { user: { id: userID, email } });

      await router.push(PATHS.HOME);
    },
  },
};
