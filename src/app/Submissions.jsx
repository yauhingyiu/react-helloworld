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
import jsonSubmissions from '../assets/submissions.json';
import jsonContracts from '../assets/contracts.json';
import jsonUsers from '../assets/users.json';

function Submissions({children}) {
  const [count, setCount] = useState(0);
  const [currentUser, currentContract] = useOutletContext();
  
  const { discipline } = useParams();
  
  const [loaderData, setLoaderData] = useState([]);
  
  useEffect(() => {
    //console.log('Submissions useEffect', currentUser, currentContract);
    let allForms = jsonAllSafetyChecklists.data;
    let users = jsonUsers.data;
    let data = jsonSubmissions.data.map( (item)=>{
      let ff = allForms.find(a=>a.id==item.formId);
      let u = users.find(a=>a.userId==item.userId);
      return {
        ...item,
        'userPostName': u.userPostName,
        'discipline':ff.discipline,
        'title':ff.title
      };
    });
    
    if(discipline) {
      setLoaderData(data.filter(a=>a.discipline==discipline));
    } else {
      setLoaderData(data);
    }
    return ()=>{
      
    };
  }, [discipline]);
  
  const layout1 = (
    <Container fluid>
      <div className="row text-start">
        <h1>Submissions {discipline && <>({discipline})</>}</h1>
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
              <th>Location</th>
              <th>From user</th>
              <th>Submission time</th>
            </tr>
          </thead>
          <tbody>
            {
              loaderData.length>0 && loaderData.map((a, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{a.discipline}</td>
                  <td>{a.title}</td>
                  <td>{a.location}</td>
                  <td>{a.userPostName}</td>
                  <td>{a.submissionDate}</td>
                </tr>
              ))
            }
            {
              loaderData.length==0 && 
              <tr>
                <td colSpan="6">No records</td>
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

export default Submissions
