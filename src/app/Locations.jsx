import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData, useOutletContext } from 'react-router-dom';
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
import MyDateRangePicker from '../common/MyDateRangePicker.jsx';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../services/ApiServices';
import jsonLocations from '../assets/locations.json';

function Locations() {
  
  const [currentUser, currentContract] = useOutletContext();
  
  const { discipline } = useParams();
  
  const [loaderData, setLoaderData] = useState([]);
  
  useEffect(() => {
    let loaderData = jsonLocations.data;
    setLoaderData(loaderData);
    return ()=>{
      
    };
  }, [discipline]);

  const layout1 = (
    <Container fluid>
      <div className="row text-start">
        <h1>Locations</h1>
      </div>
      &nbsp;
      <div className="row">
        <div className="col">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              loaderData.length>0 && loaderData.map((a, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{a.id}</td>
                  <td>{a.location}</td>
                </tr>
              ))
            }
            {
              loaderData.length==0 && (
                <tr>
                  <td colSpan="3">No records</td>
                </tr>
              )
            }
          </tbody>
        </Table>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default Locations
