import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Settings from './app/Settings.jsx'
import MainLayout from './app/MainLayout.jsx'
import Home from './app/Home.jsx'
import Form1 from './app/Form1.jsx'
import Form2 from './app/Form2.jsx'
import AllFormsTable from './app/AllFormsTable.jsx'
import Reports from './app/Reports.jsx'
import SimError from './app/SimError.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import allSafetyChecklists from './assets/all-safety-checklists.json';

const router = createBrowserRouter([
  {
    path: '/',
    //element: <App />,
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: "/home",
    children: [
      //{ index: true, Component: Home },
      {
        // again, no path, just a component for the layout
        Component: MainLayout,
        children: [
          { index: true, Component: Home },
          { path: "form1", Component: Form1 },
          { path: "form2", Component: Form2 },
          { 
            path: "allformstable", 
            loader: async () => {
              console.log('allSafetyChecklists', allSafetyChecklists);
              return { loaderData: allSafetyChecklists.data };
            },
            Component: AllFormsTable 
          },
          { path: "reports", Component: Reports },
          { path: "reports/:p1/:p2", Component: Reports },
          { path: "simerror", Component: SimError },
          //{ path: ":pid/edit", Component: EditProject },
        ],
      },
    ],
  }
]);

export default router;