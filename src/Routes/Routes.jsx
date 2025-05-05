import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import HomeLayout from '../layout/HomeLayout';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {
            index:true,
            path:"/",
            Component:<p>this is home</p>
        }
      ]
    },
  ]);