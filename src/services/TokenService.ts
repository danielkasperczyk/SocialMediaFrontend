import jwtDecode from 'jwt-decode';

interface IUser {
  email: string;
  role: string;
  username: string;
}

interface IToken extends IUser {
  exp: number;
  iat: number;
}

class TokenService {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private tokenExpired(): boolean {
    const { exp } = this.decoded();
    const expired = exp < Date.now() / 1000;
    if (expired) {
      localStorage.removeItem('token');
    }
    return expired;
  }

  private decoded(): IToken {
    const tokenDecoded = jwtDecode<IToken>(this.token);
    return tokenDecoded;
  }

  validate(): boolean {
    let validToken = false;
    validToken = !this.tokenExpired();

    return validToken;
  }

  userData(): IUser {
    const { exp, iat, ...userData } = this.decoded();
    return userData;
  }
}

export default TokenService;
