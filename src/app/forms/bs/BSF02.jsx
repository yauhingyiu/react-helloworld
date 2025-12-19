import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';
import MyDateRangePicker from '../../../common/MyDateRangePicker.jsx';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../../services/ApiServices';
import BSF02V1 from './BSF02V1.jsx'
import BSF02V2 from './BSF02V2.jsx'

function BSF02() {
  
  const { formVersion } = useParams();
  
  const layout1 = (
    <>
    {formVersion==0 && <BSF02V2 /> }
    {formVersion==1 && <BSF02V1 /> }
    {formVersion==2 && <BSF02V2 /> }
    </>
  );

  return layout1;
}

export default BSF02
