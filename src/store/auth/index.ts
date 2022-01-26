/* eslint-disable no-unused-vars */
import { reactive } from 'vue';

interface AuthState {
  auth: string;
}

interface AuthGetters {
  isAuth: () => boolean;
}

interface AuthMutations {
  setAuth: (token: string) => void;
}

export interface AuthStore {
  state: AuthState;
  getters: AuthGetters;
  mutations: AuthMutations;
}

const state: AuthState = reactive({
  auth: localStorage.getItem('token') || '',
});

const getters: AuthGetters = {
  isAuth: () => !!state.auth,
};

const mutations: AuthMutations = {
  setAuth(token) {
    state.auth = token;
  },
};

export default {
  state,
  getters,
  mutations,
};
