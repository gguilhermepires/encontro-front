import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import smoothscroll from 'smoothscroll-polyfill';
import { navigatorDetector } from 'typesafe-i18n/detectors';

import TypesafeI18n from './i18n/i18n-react';
import { detectLocale } from './i18n/i18n-util';
import { loadLocale } from './i18n/i18n-util.sync';
import { theme } from './styles/theme';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { pageTitlePrefix } from './utils/miscellaneous';

function App() {
  document.title = pageTitlePrefix();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 1000 * 60, keepPreviousData: true },
    },
  });

  // kick off the polyfill for smoothscroll support in safari
  smoothscroll.polyfill();

  const locale = detectLocale(navigatorDetector);

  // Load locales
  const [localesLoaded, setLocalsLoaded] = useState(false);

  useEffect(() => {
    loadLocale('en');
    loadLocale('fr');
    setLocalsLoaded(true);
  }, [locale]);

  if (!localesLoaded) return null;

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider contextSharing client={queryClient}>
        <TypesafeI18n locale={locale}>
          <CookiesProvider>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
          </CookiesProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </TypesafeI18n>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
