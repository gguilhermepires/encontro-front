/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { PagesProvider } from '../contexts/PagesContext';

export function setAuthCookie() {
  beforeAll(() => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value:
        'Authorization={"user":{"id":"be74ca48-c414-47ed-922f-0d6dfa0b2d0d","roles":["staff"],"firstName":"Guilherme","email":"gpires@primeit.pt"},"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZTc0Y2E0OC1jNDE0LTQ3ZWQtOTIyZi0wZDZkZmEwYjJkMGQiLCJzc29JZCI6IjkzNjU1OTYwIiwicm9sZXMiOiJTdGFmZjtTdGFmZiBHcmFuZGUgRWNvbGU7U3RhZmYgRU9MIEludGVybmUiLCJmaXJzdE5hbWUiOiJHdWlsaGVybWUiLCJlbWFpbCI6ImdwaXJlc0BwcmltZWl0LnB0IiwiaWF0IjoxNjY2Nzk3NjE3LCJleHAiOjE2NjY4ODc2MTd9.xTyFTyxJ1o60COEdTscZRMfQphXTPlSPpcUDu7dYex0","refreshToken":{"id":"128fd4a7-8417-4d5d-9e67-a33df02a1f99","expiresIn":1666804817,"userId":"be74ca48-c414-47ed-922f-0d6dfa0b2d0d","createdAt":"2022-10-26T15:20:17.406Z","updatedAt":"2022-10-26T15:20:17.407Z","deletedAt":null}}',
    });
  });
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: ReactElement) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <ChakraProvider>
      <QueryClientProvider client={testQueryClient}>
        <CookiesProvider>
          <AuthProvider>
            <PagesProvider>
              <BrowserRouter>{ui}</BrowserRouter>
            </PagesProvider>
          </AuthProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );

  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(
        <ChakraProvider>
          <QueryClientProvider client={testQueryClient}>
            <CookiesProvider>
              <AuthProvider>
                <PagesProvider>
                  <BrowserRouter>{rerenderUi}</BrowserRouter>
                </PagesProvider>
              </AuthProvider>
            </CookiesProvider>
          </QueryClientProvider>
        </ChakraProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return ({ children }: { children: ReactNode }) => (
    <ChakraProvider>
      <QueryClientProvider client={testQueryClient}>
        <CookiesProvider>
          <AuthProvider>
            <PagesProvider>
              <BrowserRouter>{children}</BrowserRouter>
            </PagesProvider>
          </AuthProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
