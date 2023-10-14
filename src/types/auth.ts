export enum UserType {
  CLIENT = '0',
  ADMIN = '1',
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: UserType[];
};

export type AuthCookie = {
  Authorization: {
    accessToken: string;
    refreshToken: {
      id: string;
      userId: string;
      expiresIn: number;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    user: User;
    version: { application: string; api: string };
  };
};

export type CookieOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'strict' | 'lax';
};
