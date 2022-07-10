import { SET_IS_AUTH } from '@/store/mutationTypes';

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
};
