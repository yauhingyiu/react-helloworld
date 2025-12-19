import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
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

function Reports2() {
  
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState( 'en' );
  const { data, isLoading, error } = useFetchGetData('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang='+lang);
  const [startDate1, setStartDate1] = useState( moment().format(DATE_FORMAT_YYYYMMDD_HHMM) );
  const [startDate2, setStartDate2] = useState( moment().format(DATE_FORMAT_YYYYMMDD) );
  const [endDate2, setEndDate2] = useState( moment().format(DATE_FORMAT_YYYYMMDD) );
  
  const button1Onclick = () => setCount((count) => count + 1);
  
  const p = useParams();

  if (isLoading) 
  {
    return (<><Spinner animation="border" />&nbsp;Loading...</>);
  }
  if (error) 
  {
    throw new Error( error );
  }
  
  //console.log('data', data);
  
  const layout1 = (
  
    <Container fluid>
    
      <div className="text-start">
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={(event) => {
            if(event.target.checked)
            {
              setLang('tc');
            }
            else
            {
              setLang('en');
            }
          }}
        />
      </div>
      
      <div className="text-start">
        Single Date:
        <MyDateRangePicker
          singleDatePicker={true}
          timePicker={true}
          startDate={startDate1}
          setStartDate={setStartDate1}
          minDate={'2025-10-01'}
          maxDate={'2025-12-15'}
        />
      </div>
      <div className="text-start">
        Date range:
        <MyDateRangePicker
          startDate={startDate2}
          setStartDate={setStartDate2}
          endDate={endDate2}
          setEndDate={setEndDate2}
          minDate={'2025-10-02'}
          maxDate={'2025-11-29'}
        />
      </div>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General Situation</Accordion.Header>
          <Accordion.Body className="text-start">
          {data.generalSituation}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>9 Days forecast</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Wind</th>
                <th>Weather</th>
              </tr>
            </thead>
            <tbody>
              {
                data.weatherForecast.map((a, index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{a.forecastDate + ' ' + a.week}</td>
                    <td>{a.forecastWind}</td>
                    <td>{a.forecastWeather}</td>
                  </tr>
                ))
              }
            </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
  
  //console.log('params', p);

  return layout1;
}

export default Reports2
