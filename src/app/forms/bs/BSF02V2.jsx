import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
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
import MyDateRangePicker from '../../../common/MyDateRangePicker.jsx';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../../services/ApiServices';
import CameraButton from '../../ui/CameraButton.jsx'

function BSF02V2() {
  
  const layout1 = (
    <Container fluid>
      <div className="row text-start">
        <h3>Development and Construction Management Board Instruction No. P07/12</h3>
        <div className="col-12">
        [This form is applicable when there are both lift and escalator installations]<br/>
        INTEGRATED PAY FOR SAFETY, ENVIRONMENT AND HYGIENE SCHEME <br/>
        Guidance Notes on Payment Criteria and Contract Manager’s (CM) Quarterly Payment Recommendation for Building Services Nominated Sub-contracts<br/>
        Date of Sub-contractor's interim payment application for Site Safety, Environmental Management and Site Hygiene items to CM  ____________________________________________ (Note 1, 2)<br/>
        <br/>
        To :	Project Quantity Surveyor 	
        <br/><br/>
        Title of Sub-contract 	
        <br/><br/>
        Sub-contract to Contract No ________________Sub-contractor<br/><br/>
        </div>
      </div>
      &nbsp;
      <div className="row">
        <div className="col">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>PSEHS Items</th>
              <th>Notes on Payment Criteria (Contract stipulations take precedence over these notes)</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td colSpan="3">Resources</td>
            </tr>
            <tr>
              <td>A1</td>
              <td>Accredited Safety Supervisors provision and discharge of duties</td>
              <td><div>1.	The Sub-contractor reports to the CM in writing confirming that Accredited Safety Supervisors are employed in accordance with the specification PRE.BS1.600(1)(a) for the assessment period.

2.	The CM is satisfied that the duties of the Accredited Safety Supervisors are satisfactorily discharged in accordance with specification PRE.BS1.600(1)(c).  These duties include:
	i.	Site inspection
	ii.	Monitor implementation of the Safety Plan
	iii.	Accident report and investigation
	iv.	Conduct trade specific safety training and pre-work activities
	v.	Attend Site Safety Committee meetings
	vi.	Prepare risk assessment reports
	vii.	Action on Labour Department contravention notices
	viii.	Implement the recommendations of the external Safety Audit Report.
	ix.	Compile and report the above duties to the CM via Contractor at the monthly site meetings.	
</div></td>
              <td><div>	Recommended for Payment
	
	Not recommended for
	Payment

For ____________________ (assessment period)

<CameraButton/>
</div></td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default BSF02V2
