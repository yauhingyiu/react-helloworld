import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import DcsmsCamera2 from './DcsmsCamera2.jsx'
import moment from 'moment';
import iconCamera from '/camera-solid-full.svg'
import iconCloseXmark from '/circle-xmark.svg'
import styles from './DcsmsCamera2.module.css';
import testImg from '/Offsiteconstruction.jpg'
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';

/*

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
        <Image src={imgSrc} width={100} height={100} 
          onClick={() => setShowImage(true)}
          className={`${showImage? styles2.fullScreenImagePreviewComponent:styles.cameraGridImage}`} />
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
*/

function CameraButton() {
  
  const [imgSrc, setImgSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);
  
  const [modalShow, setModalShow] = React.useState(false);
  
  const onPhoto = (imgSrc)=>{
    setImgSrc(imgSrc);
  };
  
  let style1 = {
    top: window.scrollY
  };
  
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures it runs once on mount and once on unmount

  
  
  const layout1 = (
    <Container fluid>
      {!imgSrc && (
      <div className={`d-flex justify-content-center align-items-center ${styles.cameraGrid}`}>
        <Button variant="normal" size="sm" onClick={() => setModalShow(true)}>
          <img src={iconCamera} className="logo" title="Take photo" />
        </Button>
      </div>
      )}
      {imgSrc && !showImage && (
      <div className={styles.cameraGrid}>
        <Image src={imgSrc} width={100} height={100} 
          onClick={() => {
            setShowImage(true);
            //window.scrollTo(0, 0); 
          }}
          className={styles.cameraGridImage} />
        <Image src={iconCloseXmark} 
          onClick={() => setImgSrc(null)} className={`logo ${styles.cameraGridBtnDelete}`} />
      </div>
      )}
      {imgSrc && showImage && (
      <>
        <Image src={imgSrc}
          onClick={() => {
            setShowImage(false);
          }}
          className={`${styles.fullScreenImagePreviewComponent}`}
          style={style1}
        />
      </>
      )}
      {modalShow && <DcsmsCamera2 parentCallback={onPhoto} 
        modalShow={modalShow}
        setModalShow={setModalShow}
      />}
    </Container>
  );

  return layout1;
}

export default CameraButton
