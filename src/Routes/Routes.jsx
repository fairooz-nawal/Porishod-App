import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from '../layout/HomeLayout';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Bill from '../Pages/Bill';
import AuthLayout from '../Layout/AuthLayout';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import ProtectedRoute from '../Components/ProtectedRoute';
import BIllDetail from '../Pages/BIllDetail';
import UpdateUser from '../Pages/UpdateUser';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/profile",
        element:<ProtectedRoute><Profile/></ProtectedRoute>
      },
      {
        path: "/bill",
        element:<ProtectedRoute><Bill/></ProtectedRoute>
      },
      {
        path: "/bill/:id",
        element:<ProtectedRoute><BIllDetail></BIllDetail></ProtectedRoute>
      },
      
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        path: "/auth/register",
        Component: Registration
      },
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/update",
        element: <ProtectedRoute><UpdateUser/></ProtectedRoute>
      },

    ]

  }
]);