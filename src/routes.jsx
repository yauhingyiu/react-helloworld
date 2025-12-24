import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Settings from './app/Settings.jsx'
import MainLayout from './app/MainLayout.jsx'
import MainLayout2 from './app/MainLayout2.jsx'
import Home from './app/Home.jsx'
import Form1 from './app/Form1.jsx'
import Form2 from './app/Form2.jsx'
import BSF02 from './app/forms/bs/BSF02.jsx'
import DcsmsCamera from './app/ui/DcsmsCamera.jsx'
import CameraTest from './app/ui/CameraTest.jsx'
import Yhy from './app/selfintro/Yhy.jsx'
import Yky from './app/selfintro/Yky.jsx'
import AllFormsTable from './app/AllFormsTable.jsx'
import Submissions from './app/Submissions.jsx'
import MyWorks from './app/MyWorks.jsx'
import Locations from './app/Locations.jsx'
import Reports from './app/Reports.jsx'
import SimError from './app/SimError.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import jsonAllSafetyChecklists from './assets/all-safety-checklists.json';
import jsonSubmissions from './assets/submissions.json';
import jsonContracts from './assets/contracts.json';
import jsonReports from './assets/reports.json';

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
    path: "yhy", 
    //Component: Yhy 
    element: <Yhy />,
  },
  {
    path: "yky", 
    element: <Yky />,
  },
  {
    path: "/home",
    children: [
      //{ index: true, Component: Home },
      {
        // again, no path, just a component for the layout
        element: <MainLayout />,
        /*
        loader: async () => {
          console.log('jsonContracts', jsonContracts, new Date());
          return { loaderData: jsonContracts.data };
        },
        //*/
        children: [
          { index: true, Component: Home },
          { path: "form/:p1", Component: Form1 },
          { 
            path: "allformstable", 
            /*
            loader: async () => {
              console.log('jsonAllSafetyChecklists', jsonAllSafetyChecklists);
              return { loaderData: jsonAllSafetyChecklists.data };
            },
            //*/
            Component: AllFormsTable 
          },
          {
            path: "myworks", 
            element: <MyWorks/>
          },
          {
            path: "submissions", 
            element: <Submissions/>
          },
          {
            path: "submissions/:discipline", 
            element: <Submissions/>
          },
          {
            path: "locations", 
            element: <Locations/>
          },
          { 
            path: "reports", 
            loader: async ({ params }) => {
              console.log('jsonReports', params, jsonReports);
              let data = jsonReports.data;
              return { loaderData: data };
            },
            Component: Reports 
          },
          { 
            path: "reports/:discipline", 
            loader: async ({ params }) => {
              console.log('jsonReports', params, jsonReports);
              let data = jsonReports.data;
              return { loaderData: data.filter(a=>a.discipline==params.discipline) };
            },
            Component: Reports 
          },
          {
            path:"camera",
            Component: CameraTest
          },
          {
            path:"forms/bs/bs-f02/:formVersion",
            Component: BSF02
          }
          
        ],
      },
    ],
  },
  {
    path: "/home2",
    children: [
      //{ index: true, Component: Home },
      {
        // again, no path, just a component for the layout
        Component: MainLayout2,
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
          { path: "submissions", Component: Submissions },
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