import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import DcsmsCamera from './DcsmsCamera.jsx'
import CameraButton from './CameraButton.jsx'
import moment from 'moment';
import iconCamera from '/camera-solid-full.svg'
import iconCloseXmark from '/circle-xmark.svg'
import styles from './DcsmsCamera.module.css';
import {Camera} from "react-camera-pro";

import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';



function CameraTest() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  
  const layout1 = (
    <Container fluid>
      <div className="row">
        <div className="col">
          <CameraButton />
        </div>
        <div className="col">
          <CameraButton />
        </div>
        <div className="col">
          <Camera ref={camera} />
          <Button onClick={() => setImage(camera.current.takePhoto())}>Take photo</Button>
          <img src={image} alt='Taken photo'/>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default CameraTest
