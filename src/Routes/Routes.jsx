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
        Component: Profile
      },
      {
        path: "/bill",
        Component: Bill
      }
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

    ]

  }
]);