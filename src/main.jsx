import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider, Routes, Route, Navigate } from 'react-router-dom';
import router from './routes.jsx';
import Home from './app/Home.jsx'
import Settings from './app/Settings.jsx'
import Form1 from './app/Form1.jsx'
import Form2 from './app/Form2.jsx'
import Yhy from './app/selfintro/Yhy.jsx'
import Yky from './app/selfintro/Yky.jsx'
import AllFormsTable from './app/AllFormsTable.jsx'
import Submissions from './app/Submissions.jsx'
import Reports from './app/Reports.jsx'
import SimError from './app/SimError.jsx'
import MainLayout from './app/MainLayout.jsx'
import MainLayout2 from './app/MainLayout2.jsx'

//<RouterProvider router={router} />
/*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<MainLayout />}>
          <Route path="" element={<Home />}/>
          <Route path="allformstable" element={<AllFormsTable />}/>
          <Route path="submissions" element={<Submissions />}>
            <Route path=":p1" element={<Submissions />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
//*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
