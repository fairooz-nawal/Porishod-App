import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import HomeLayout from '../layout/HomeLayout';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Bill from '../Pages/Bill';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
            path:"/profile",
            Component:Profile
        },
        {
            path:"/bill",
            Component:Bill
        }
      ]
    },
  ]);