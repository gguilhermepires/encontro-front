import { AuthCookie, CookieOptions } from '../types/auth';
import { ResponseData } from '../types/responseData';

export interface IRefreshTokenParams {
  refreshToken: string;
  setAuthCookie: (
    name: 'Authorization',
    value: AuthCookie['Authorization'],
    options?: CookieOptions
  ) => void;
  removeAuthCookie: (name: 'Authorization', options?: CookieOptions) => void;
}

export async function refreshToken({
  refreshToken: tokenId,
  setAuthCookie,
  removeAuthCookie,
}: IRefreshTokenParams) {
  const url = `${process.env.REACT_APP_API_URL}/users/refresh-token`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: tokenId }),
  });

  const data: ResponseData<AuthCookie['Authorization']> = await res.json();

  if (data.code !== 200) {
    if (!data.message) {
      throw new Error('Something went wrong');
    }

    if (data.message === 'Could not refresh token') {
      removeAuthCookie('Authorization', { path: '/' });
    }

    throw new Error(data.message);
  }
  if (data.data === undefined) {
    throw new Error("data undefined");
  }
  
  const expires = new Date(data.data.refreshToken.expiresIn * 1000);

  setAuthCookie('Authorization', data.data, {
    path: '/',
    expires,
  });

  return data.data;
}
