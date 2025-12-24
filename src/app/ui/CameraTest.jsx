import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import CameraButton from './CameraButton.jsx'
import moment from 'moment';
import iconCamera from '/camera-solid-full.svg'
import iconCloseXmark from '/circle-xmark.svg'
import {Camera} from "react-camera-pro";

import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';

//https://github.com/purple-technology/react-camera-pro/blob/master/example/src/App.tsx

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
          <CameraButton />
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default CameraTest
