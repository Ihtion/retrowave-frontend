import { SET_APP_IS_INITIALIZED } from '@/store/mutationTypes';

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
  getters: {
    isAppInitialized(state) {
      return state.isInitialized;
    },
  },
};
