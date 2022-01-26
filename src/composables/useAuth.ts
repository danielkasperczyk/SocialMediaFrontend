import { ref, computed, inject } from 'vue';
import Auth, { ILogin, IRegister } from 'src/services/repositories/Auth';
import TokenService from 'src/services/TokenService';
import { RootStore } from 'src/store';

const useAuth = () => {
  const { auth } = inject('store') as RootStore;
  const repository = new Auth();

  const loading = ref(false);

  const token = computed(() => auth.state.auth);

  const isLogged = computed(() => {
    if (!token.value) {
      return false;
    }
    const tokenService = new TokenService(token.value);
    return tokenService.validate();
  });

  const userData = computed(() => {
    if (!token.value) {
      return {};
    }
    const tokenService = new TokenService(token.value);
    return tokenService.userData();
  });

  const login = async (credentials: ILogin) => {
    loading.value = true;
    const userToken: string | void = await repository.login(credentials);
    if (typeof userToken === 'string') {
      localStorage.setItem('token', userToken);
      auth.mutations.setAuth(userToken);
    }
    loading.value = false;
  };

  const register = async (credentials: IRegister) => {
    loading.value = true;
    await repository.register(credentials);
    loading.value = false;
  };

  return { isLogged, userData, token, loading, login, register };
};

export default useAuth;
