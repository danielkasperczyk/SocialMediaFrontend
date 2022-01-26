import Repository from 'src/services/repositories/Repository';

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  username: string;
}

export interface INewUser extends IRegister {
  articles: string[];
  avatar: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface ILoginResponse {
  token: string;
}

class Auth extends Repository {
  public async register(credentials: IRegister) {
    try {
      const { data } = await this.api.post<INewUser>('register', credentials);
      return data;
    } catch (error: any) {
      return this.errorHandler(error);
    }
  }

  public async login(credentials: ILogin) {
    try {
      const { data } = await this.api.post<ILoginResponse>(
        'login',
        credentials,
      );
      return data.token;
    } catch (error: any) {
      return this.errorHandler(error);
    }
  }
}

export default Auth;
