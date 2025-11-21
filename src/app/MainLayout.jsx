import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
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
import ErrorBoundary from '../ErrorBoundary.jsx';
import iconArrowBarLeft from '/arrow-bar-left.svg'
import iconArrowBarRight from '/arrow-bar-right.svg'
import iconArrowClockwise from '/arrow-clockwise.svg'
import iconBoxArrowRight from '/box-arrow-right.svg'
import moment from 'moment';
import {useFetchGetData, useFetchPostData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../services/ApiServices';

// Fallback component to display when an error occurs
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MainLayout() {
  const [count, setCount] = useState(0);
  const [isLeftMenuVisible, setLeftMenuVisible] = useState(true);
  
  const logError = (error, info) => {
    // Log the error to a service like Sentry or console
    console.error("Caught an error:", error, info);
  };

  const layout1 = (
    <ErrorBoundary>
      <Row className="mainLayoutRow1">
        <Col md={'auto'}>
          {/* Content for the left section */}
          {isLeftMenuVisible &&
          <Navbar expand="lg" className="flex-column vertical-navbar navbar1" data-bs-theme="dark" bg="dark">
          
            <Container fluid className="flex-column align-items-start">
              <Navbar.Brand href="/home/">DCSMS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="flex-column align-items-start">
                <Nav className="flex-column">
                  <Nav.Link href="/home/form1">Form 1</Nav.Link>
                  <Nav.Link href="/home/form2">Form 2</Nav.Link>
                  <Nav.Link href="/home/allformstable">Safety Checklists (Table)</Nav.Link>
                  <Nav.Link href="/home/simerror">Sim Error</Nav.Link>
                  <Nav.Link href="/settings">Settings</Nav.Link>
                  <Nav.Link href="reports">Reports</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          }
        </Col>
        <Col>
          {/* Content for the right section */}
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
                  <Form.Select>
                    <option>Contract #110001 Tung Chung Area 345</option>
                    <option>Contract #110002 Tung Chung Area 345</option>
                  </Form.Select>
                  <h6><Badge bg="danger">Design and Build</Badge></h6>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Button variant="normal" size="sm">
                    <img src={iconArrowClockwise} className="logo" title="Switch contract" />
                    Switch
                  </Button>
                </Navbar.Brand>
                <Navbar.Text>
                  Signed in as: <a href="#login">acsm01</a><br/>Last login: {moment().format(DATE_FORMAT_YYYYMMDD_HHMM)}<br/>
                </Navbar.Text>
                <Navbar.Brand>
                <Button variant="normal" size="sm">
                  <img src={iconBoxArrowRight} className="logo" title="Sign out" />Sign out
                </Button>
              </Navbar.Brand>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Outlet />
        </Col>
      </Row>
    </ErrorBoundary>
  );
  
  return layout1;
}

export default MainLayout
