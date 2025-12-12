import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  const [count, setCount] = useState(0);
  
  const button1Onclick = () => setCount((count) => count + 1);

  const data = [
    {discipline:'BS', title:'aaa', date:''}
  ];

  const layout1 = (
    <Container>
      <div className="row text-start">
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>BS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 7
                
              </Card.Text>
              <Card.Link href="#">View</Card.Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
        <div className="col">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>BW</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 9
                
              </Card.Text>
              <Card.Link href="#">View</Card.Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
        <div className="col">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>FDN</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 5
                
              </Card.Text>
              <Card.Link href="#">View</Card.Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
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
              <th>Submission time</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((a, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{a.discipline}</td>
                  <td>{a.title}</td>
                  <td>{a.title}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default Home
