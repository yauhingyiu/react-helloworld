import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Settings from './app/Settings.jsx'
import MainLayout from './app/MainLayout.jsx'
import MainLayout2 from './app/MainLayout2.jsx'
import Home from './app/Home.jsx'
import Form1 from './app/Form1.jsx'
import Form2 from './app/Form2.jsx'
import Yhy from './app/selfintro/Yhy.jsx'
import Yky from './app/selfintro/Yky.jsx'
import AllFormsTable from './app/AllFormsTable.jsx'
import Submissions from './app/Submissions.jsx'
import Reports from './app/Reports.jsx'
import SimError from './app/SimError.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import jsonAllSafetyChecklists from './assets/all-safety-checklists.json';
import jsonSubmissions from './assets/submissions.json';
import jsonContracts from './assets/contracts.json';
import jsonReports from './assets/reports.json';

const router2 = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  { 
    path: "allformstable", 
    Component: AllFormsTable 
  },
  {
    path: "submissions", 
    Component: Submissions 
  },
  {
    path: "submissions/:p1", 
    Component: Submissions 
  },
  { 
    path: "reports", 
    Component: Reports 
  },
  { 
    path: "reports/:p1", 
    Component: Reports 
  }
]);

export default router2;