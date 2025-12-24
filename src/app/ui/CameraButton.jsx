import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import DcsmsCamera from './DcsmsCamera.jsx'
import DcsmsCamera2 from './DcsmsCamera2.jsx'
import moment from 'moment';
import iconCamera from '/camera-solid-full.svg'
import iconCloseXmark from '/circle-xmark.svg'
import styles from './DcsmsCamera.module.css';

import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';



function CameraButton({isPro}) {
  
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
        <Image src={iconCloseXmark} 
          onClick={() => setImgSrc(null)} className={`logo ${styles.cameraGridBtnDelete}`} />
      </div>
      )}
      <DcsmsCamera parentCallback={onPhoto} 
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </Container>
  );

  const layout2 = (
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
        <Image src={iconCloseXmark} 
          onClick={() => setImgSrc(null)} className={`logo ${styles.cameraGridBtnDelete}`} />
      </div>
      )}
      {modalShow && <DcsmsCamera2 parentCallback={onPhoto} 
        modalShow={modalShow}
        setModalShow={setModalShow}
      />}
    </Container>
  );

  return isPro==0? layout1:layout2;
}

export default CameraButton
