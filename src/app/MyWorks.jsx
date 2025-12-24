import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jsonAllSafetyChecklists from '../assets/all-safety-checklists.json';
import jsonMyWorks from '../assets/myworks.json';
import jsonContracts from '../assets/contracts.json';
import jsonUsers from '../assets/users.json';

function MyWorks({children}) {
  const [count, setCount] = useState(0);
  const [currentUser, currentContract] = useOutletContext();
  
  const [loaderData, setLoaderData] = useState([]);
  
  useEffect(() => {
    console.log('MyWorks useEffect');
    let allForms = jsonAllSafetyChecklists.data;
    
    let data = jsonMyWorks.data.map( (item)=>{
      let ff = allForms.find(a=>a.id==item.formId);
      return {
        ...item,
        'discipline':ff.discipline,
        'title':ff.title
      };
    });
    
    setLoaderData(data);
    return ()=>{
      
    };
  }, []);
  
  const layout1 = (
    <Container fluid>
      <div className="row text-start">
        <h1>My Works</h1>
      </div>
      &nbsp;
      <div className="row">
        <div className="col">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Discipline</th>
              <th>Form Title</th>
              <th>Status</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {
              loaderData.length>0 && loaderData.map((a, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{a.discipline}</td>
                  <td>{a.title}</td>
                  <td>{a.status}</td>
                  <td>{a.lastUpdate}</td>
                </tr>
              ))
            }
            {
              loaderData.length==0 && 
              <tr>
                <td colSpan="5">No records</td>
              </tr>
            }
          </tbody>
        </Table>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default MyWorks
