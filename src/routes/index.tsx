import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesSwitch,
} from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import { Health, Home, Login } from '../pages';
import { UserType } from '../types/auth';
import PageWithHeader from './PageWithHeader';
import { setCookie } from '../utils/cookies';

function Routes() {
  const { user } = useAuth();

  if (!user) setCookie('redirect', { pathname: window.location.pathname });

  return (
    <BrowserRouter>
      <RoutesSwitch>
        {user ? (
          <Route element={<PageWithHeader />}>
            <Route
              path="*"
              element={
                <Navigate
                  to='login'
                />
              }
            />
            {user?.roles[0] === UserType.CLIENT ? (
              <Route>
                <Route path="login">
                  <Route index element={<Login />} />
                </Route>
              </Route>
            ) : user?.roles[0] === UserType.ADMIN ? (
              <>
                <Route path="admin/" element={<Home />} />
              </>
            ) : null
            }
          </Route>
        ) : (
          <>
            <Route
              path="*"
              element={
                <Navigate to={`/?redirect=${window.location.pathname}`} />
              }
            />
            <Route path="/" element={<Home />} />
          </>
        )}
        <Route path="/health" element={<Health />} />
      </RoutesSwitch>
    </BrowserRouter>
  );
}

export default Routes;
