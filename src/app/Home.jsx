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

  const layout1 = (
    <Container fluid>
      <div className="row text-start">
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col-3">
          <Card>
            <Card.Body>
              <Card.Title>BS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Safety Checklist</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 7
              </Card.Text>
              <Link to="/home/submissions/BS" className="btn btn-primary">View</Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
        <div className="col-3">
          <Card>
            <Card.Body>
              <Card.Title>BW</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Safety Checklist</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 9
              </Card.Text>
              <Link to="/home/submissions/BW" className="btn btn-primary">View</Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
        <div className="col-3">
          <Card>
            <Card.Body>
              <Card.Title>FDN</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Safety Checklist</Card.Subtitle>
              <Card.Text>
                Number of checklist submitted: 5
              </Card.Text>
              <Link to="/home/submissions/FDN" className="btn btn-primary">View</Link>
            </Card.Body>
          </Card>
          &nbsp;
        </div>
        
      </div>
      &nbsp;
      
    </Container>
  );

  return layout1;
}

export default Home
