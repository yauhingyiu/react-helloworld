import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SimError() {
  const [count, setCount] = useState(0);
  
  const button1Onclick = () => setCount((count) => count + 1);
  
  function goerror()
  {
    throw new Error('simular error');
  }
  
  const MyProblematicComponent = () => {
    // This component might throw an error
    if (Math.random() > 0.5) {
      throw new Error("Simulated error in MyProblematicComponent!");
    }
    return <div>This is a functional component that might fail.</div>;
  }

  const layout1 = (
    <Container fluid>
      <h1>Hello seven</h1>
      <div className="card">
        <button onClick={goerror}>
          go error
        </button>
        <p>React Version: {React.version}</p>
      </div>
      <MyProblematicComponent/>
    </Container>
  );

  return layout1;
}

export default SimError
