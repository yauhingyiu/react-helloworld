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
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import AllFormsTable from './AllFormsTable.jsx'
import TopNavBar from './TopNavBar.jsx'
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
import jsonUsers from '../assets/users.json';
import router2 from '../routes2.jsx';
import Home from './Home.jsx'

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

function MainLayout2() {
  const [currentContract, setCurrentContract] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLeftMenuVisible, setLeftMenuVisible] = useState(true);
  const [contracts, setContracts] = useState([]);
  
  useEffect(() => {
    let data = jsonContracts.data;
    let userData = jsonUsers.data;
    let user = userData[0];
    console.log('MainLayout2', data);
    setContracts(data);
    let lastLogin = moment().format(DATE_FORMAT_YYYYMMDD_HHMM);
    setCurrentUser({...user,lastLogin});
    if(data && data.length>0) {
      setCurrentContract(data[0]);
    }
    return ()=>{
      
    };
  }, []);
  
  const layout1 = (
    <ErrorBoundary>
      
      <Row className="mainLayoutRow1">
        <Col md={'auto'}>
          {/* Content for the left section */}
          {isLeftMenuVisible &&
          <Navbar expand="lg" className="flex-column vertical-navbar navbar1" data-bs-theme="dark" bg="dark">
          
            <Container fluid className="flex-column align-items-center">
              <Link to="/home" className="navbar-brand">DCSMS<br/>Safety Checklists</Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="flex-column align-items-start">
                <Nav className="flex-column">
                  <Link to="/home/myworks" className="nav-link">My Works</Link>
                  <Link to="/home/allformstable" className="nav-link">Safety Checklists</Link>
                  <Link to="/home/submissions/BS" className="nav-link">Submissions (BS)</Link>
                  <Link to="/home/submissions/BW" className="nav-link">Submissions (BW)</Link>
                  <Link to="/home/submissions/FDN" className="nav-link">Submissions (FDN)</Link>
                  <Link to="/home/locations" className="nav-link">Locations</Link>
                  <Link to="/home/reports" className="nav-link">Reports</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          }
        </Col>
        <Col>
          {/* Content for the right section */}
          <TopNavBar
            contracts={contracts}
            currentUser={currentUser}
            currentContract={currentContract}
            setCurrentContract={setCurrentContract} 
            isLeftMenuVisible={isLeftMenuVisible}
            setLeftMenuVisible={setLeftMenuVisible}
          />
          
          {
            <><br/><Outlet context={[currentUser, currentContract, setCurrentContract]} /></>
          }
        </Col>
      </Row>
    </ErrorBoundary>
  );
  
  return layout1;
}

const MainLayout = React.memo(MainLayout2);

export default MainLayout
//<Outlet context={[userAndContract, setUserAndContract]} />
