import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useCookies } from 'react-cookie';

import { refreshToken as RefreshTokenRequest } from '../services/refreshToken';
import { AuthCookie, CookieOptions, User } from '../types/auth';
import { getCookie } from '../utils/cookies';

interface AuthContextData {
  user: User | null;
  accessToken: string;
  refreshToken: string;
  version: { application: string; api: string };
  setAuthCookie: (
    name: 'Authorization',
    value: AuthCookie['Authorization'],
    options?: CookieOptions
  ) => void;
  removeAuthCookie: (name: 'Authorization', options?: CookieOptions) => void;
  setTokenNeedsRefresh: Dispatch<SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies<
    'Authorization',
    AuthCookie
  >(['Authorization']);
  const [user, setUser] = useState<User | null>(authCookie.Authorization?.user);
  const [version, setVersion] = useState<{
    application: string;
    api: string;
  }>(authCookie.Authorization?.version);
  const [accessToken, setAccessToken] = useState<string>(
    authCookie.Authorization?.accessToken
  );
  const [refreshToken, setRefreshToken] = useState<string>(
    authCookie.Authorization?.refreshToken?.id
  );
  const [tokenNeedsRefresh, setTokenNeedsRefresh] = useState(false);

  useEffect(() => {
    if (authCookie.Authorization) {
      setUser(authCookie.Authorization.user);
      setVersion(authCookie.Authorization.version);
      setAccessToken(authCookie.Authorization.accessToken);
      setRefreshToken(authCookie.Authorization.refreshToken.id);
    } else {
      setUser(null);
    }
  }, [authCookie]);

  useEffect(() => {
    if (tokenNeedsRefresh) {
      (async () => {
        // Get cookie value from document instead of state in case other tabs have changed its
        // value since the last state update in this tab
        const latestCookieValue =
          getCookie<AuthCookie['Authorization']>('Authorization');

        await RefreshTokenRequest({
          refreshToken: latestCookieValue?.refreshToken?.id ?? refreshToken,
          removeAuthCookie,
          setAuthCookie,
        });

        setTimeout(() => setTokenNeedsRefresh(false), 200);
      })();
    }
  }, [tokenNeedsRefresh]);

  const value = useMemo(
    () => ({
      user,
      version,
      accessToken,
      refreshToken,
      setTokenNeedsRefresh,
      setAuthCookie,
      removeAuthCookie,
    }),
    [user, version, accessToken, refreshToken, tokenNeedsRefresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
