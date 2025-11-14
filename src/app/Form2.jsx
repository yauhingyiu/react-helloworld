import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Form2() {
  const [count, setCount] = useState(0);
  
  const button1Onclick = () => setCount((count) => count + 1);

  const layout1 = (
    <Container fluid>
      
      <h1>Form 2</h1>
      <div className="card">
        <button onClick={button1Onclick}>
          count is {count}
        </button>
        <p>React Version: {React.version}</p>
      </div>

    </Container>
  );

  return layout1;
}

export default Form2
