import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter }
  from "react-router-dom";
import HomePage from "./pages/Home/Home";
import LoginV1Page from "./pages/LoginV1/LoginV1";
import LoginPage from "./pages/Login/Login";
import { AuthProvider } from './contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react'

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
