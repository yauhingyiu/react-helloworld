import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jsonAllSafetyChecklists from '../assets/all-safety-checklists.json';

function AllForms() {
  const navigate = useNavigate();
  
  //const {loaderData} = useLoaderData();
  const [loaderData, setLoadData] = useState([]);
  
  useEffect(() => {
    let loadData = jsonAllSafetyChecklists.data;
    setLoadData(loadData);
    
    return ()=>{
      
    };
  }, [loaderData]);
  
  
  const [safetyChecklists, setSafetyChecklists] = useState([]);
  const [safetyChecklistsFiltered, setSafetyChecklistsFiltered] = useState([]);
  const [safetyChecklistsBsFiltered, setSafetyChecklistsBsFiltered] = useState([]);
  const [safetyChecklistsBwFiltered, setSafetyChecklistsBwFiltered] = useState([]);
  const [safetyChecklistsFdnFiltered, setSafetyChecklistsFdnFiltered] = useState([]);
  
  useEffect(() => {
    if(loaderData!=null)
    {
      
      setSafetyChecklists(loaderData);
      setSafetyChecklistsFiltered(loaderData);
      setSafetyChecklistsBsFiltered(loaderData.filter(a=>a.discipline=='BS'));
      setSafetyChecklistsBwFiltered(loaderData.filter(a=>a.discipline=='BW'));
      setSafetyChecklistsFdnFiltered(loaderData.filter(a=>a.discipline=='FDN'));
    }
    // Return a cleanup function
    return () => {
      
    };
  }, [loaderData]);
  
  
  
  let timeout1 = 0;
  const [toggleValue1, setToggleValue1] = useState(false);
  
  const text1Onchange = (e) => {
    clearTimeout(timeout1);
    timeout1 = setTimeout( ()=>{
      setSafetyChecklistsFiltered( 
        safetyChecklists.filter( k=>e.target.value=='' || k.title.toUpperCase().includes(e.target.value.toUpperCase()))
      );
      setSafetyChecklistsBsFiltered( safetyChecklistsFiltered.filter(a=>a.discipline=='BS') );
      setSafetyChecklistsBwFiltered( safetyChecklistsFiltered.filter(a=>a.discipline=='BW') );
      setSafetyChecklistsFdnFiltered( safetyChecklistsFiltered.filter(a=>a.discipline=='FDN') );
    }, 50);
  };

  const layout1 = (
    <Container fluid>
      
      <h1 className="text-start">Safety checklists</h1>
      <Row>
        <Col md={'auto'}>
          <Form.Group>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Show Tabs"
              onChange={(e)=>setToggleValue1(e.target.checked)}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="card">
        <Form.Control type="text" id="text1" placeholder="Enter keyword to filter" onChange={text1Onchange} />
        <br />
        {toggleValue1?
        <Tabs
          defaultActiveKey="BS"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="BS" title="BS">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Discipline</th>
                  <th>Form Title</th>
                </tr>
              </thead>
              <tbody>
                {
                  safetyChecklistsBsFiltered.map((a, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{a.discipline}</td>
                      <td>{a.title}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="BW" title="BW">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Discipline</th>
                  <th>Form Title</th>
                </tr>
              </thead>
              <tbody>
                {
                  safetyChecklistsBwFiltered.map((a, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{a.discipline}</td>
                      <td>{a.title}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="FDN" title="FDN">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Discipline</th>
                  <th>Form Title</th>
                </tr>
              </thead>
              <tbody>
                {
                  safetyChecklistsFdnFiltered.map((a, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{a.discipline}</td>
                      <td>{a.title}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Tab>
        </Tabs>
        :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Discipline</th>
              <th>Form Title</th>
            </tr>
          </thead>
          <tbody>
            {
              safetyChecklistsFiltered.map((a, index)=>(
                <tr key={index} onClick={()=>navigate(`../forms/bs/${a.id.toLowerCase()}/0`)}>
                  <td>{index+1}</td>
                  <td>{a.discipline}</td>
                  <td>{a.title}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        }
      </div>

    </Container>
  );

  return layout1;
}

export default AllForms
