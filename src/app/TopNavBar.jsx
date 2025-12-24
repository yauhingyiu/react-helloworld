import React, { useState, useEffect } from 'react'
import { BrowserRouter, RouterProvider, Routes, Route, Link, Outlet, useLoaderData } from 'react-router-dom';
import './MainLayout.css'
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormSelect from 'react-bootstrap/FormSelect'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import AllFormsTable from './AllFormsTable.jsx'
import Submissions from './Submissions.jsx'
import Reports from './Reports.jsx'
import ErrorBoundary from '../ErrorBoundary.jsx';
import iconArrowBarLeft from '/arrow-bar-left.svg'
import iconArrowBarRight from '/arrow-bar-right.svg'
import iconArrowClockwise from '/arrow-clockwise.svg'
import iconBoxArrowRight from '/box-arrow-right.svg'
import moment from 'moment';
import {useFetchGetData, useFetchPostData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../services/ApiServices';
import jsonContracts from '../assets/contracts.json';
import Home from './Home.jsx'


function TopNavBar({contracts, 
  currentUser, 
  currentContract, setCurrentContract,
  isLeftMenuVisible, setLeftMenuVisible, 
  children}) {
  
  const contractOnChange = (e)=>{
    //console.log(e.target.value);
    let contract = contracts.find(a=>a.id==e.target.value);
    //console.log(contract);
    setCurrentContract(contract);
  }
  
  const layout1 = (

    <Navbar className="bg-body-tertiary text-end" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img src={isLeftMenuVisible? iconArrowBarLeft:iconArrowBarRight} className="logo" title={isLeftMenuVisible?"Hide left menu":"Show left menu"}
            onClick={()=>setLeftMenuVisible(!isLeftMenuVisible)}
          /><br/>
        </Navbar.Brand>
        
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <Form.Select onChange={contractOnChange} value={currentContract && currentContract.id}>
            {
              contracts 
              && contracts.length>0 
              && contracts.map( (a,index)=>(
                <option key={a.id} value={a.id}>{a.title}</option>
              ))
            }
            </Form.Select>
            { currentContract
            && currentContract.dbCntrInd=='Y' 
            && (<h6><Badge bg="danger">Design and Build</Badge></h6>)}
          </Navbar.Brand>
          <Navbar.Brand>
            <Button variant="normal" size="sm">
              <img src={iconArrowClockwise} className="logo" title="Switch contract" />
            </Button>
          </Navbar.Brand>
          <Navbar.Text>
            Signed in as: <a href="#login">{currentUser.userId}</a><br/>Last login: {currentUser.lastLogin}<br/>
          </Navbar.Text>
          <Navbar.Brand>
          <Button variant="normal" size="sm">
            <img src={iconBoxArrowRight} className="logo" title="Sign out" />Sign out
          </Button>
        </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
  return layout1;
}

export default TopNavBar
//