import auth, { AuthStore } from './auth';

export interface RootStore {
  auth: AuthStore;
}

const store: RootStore = {
  auth,
};

export default store;
