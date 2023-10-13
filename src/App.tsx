
import React from 'react';
import './index.css';
import { RouterProvider, createBrowserRouter }
  from "react-router-dom";
import HomePage from "./pages/Home/Home";
import LoginV1Page from "./pages/LoginV1/LoginV1";
import LoginPage from "./pages/Login/Login";
import { ChakraProvider } from '@chakra-ui/react';
import { Context, AuthProvider } from './contexts/AuthContext';
import { useContext } from "react";


function App() {
  // const {
  //   isAuthenticated
  // } = useContext(AuthProvider);
  // const { isAuthenticated } = useContext(Context);
  // console.log('linha 20', isAuthenticated);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/loginV1",
      element: <LoginV1Page />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "*",
      element: <LoginPage />

    }

  ]);

  return (
    <ChakraProvider>
      <AuthProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
