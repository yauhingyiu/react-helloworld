import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import DcsmsCamera from './DcsmsCamera.jsx'
import moment from 'moment';
import iconCamera from '/camera-solid-full.svg'
import iconCloseXmark from '/circle-xmark.svg'
import styles from './DcsmsCamera.module.css';

import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';



function CameraButton() {
  
  const [imgSrc, setImgSrc] = useState(null);
  
  const [modalShow, setModalShow] = React.useState(false);
  
  const onPhoto = (imgSrc)=>{
    setImgSrc(imgSrc);
  };
  
  const layout1 = (
    <Container fluid>
      {!imgSrc && (
      <div className={`d-flex justify-content-center align-items-center ${styles.cameraGrid}`}>
        <Button variant="normal" size="sm" onClick={() => setModalShow(true)}>
          <img src={iconCamera} className="logo" title="Take photo" />
        </Button>
      </div>
      )}
      {imgSrc && (
      <div className={styles.cameraGrid}>
        <Image src={imgSrc} width={100} height={100} className={styles.cameraGridImage} />
        <img src={iconCloseXmark} 
          onClick={() => setImgSrc(null)} className={`logo ${styles.cameraGridBtnDelete}`} />
      </div>
      )}
      <DcsmsCamera parentCallback={onPhoto} 
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </Container>
  );

  return layout1;
}

export default CameraButton
