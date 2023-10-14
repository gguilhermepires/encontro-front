import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesSwitch,
} from 'react-router-dom';
import { Health, Home, Login } from '../pages';
import { UserType } from '../types/auth';
import PageWithHeader from './PageWithHeader';
import { setCookie } from '../utils/cookies';
import { useAuth } from '../contexts/AuthProvider';

function Routes() {
  const { user } = useAuth();

  if (!user) setCookie('redirect', { pathname: 'login' });
  return (
    <BrowserRouter>
      <RoutesSwitch>
        {user ? (
          <Route element={<PageWithHeader />}>
            <Route
              path="*"
              element={
                <Navigate
                  to='/home'
                />
              }
            />
            {user?.roles[0] === UserType.CLIENT ? (
              <Route>
                <Route path="login">
                  <Route index element={<Login />} />
                </Route>
                <Route path="home">
                  <Route index element={<Home />} />
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
                <Navigate to={`/login`} />
              }
            />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/health" element={<Health />} />
      </RoutesSwitch>
    </BrowserRouter>
  );
}

export default Routes;
