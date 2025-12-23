import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import styles from './DcsmsCamera.module.css';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';
import Webcam from "react-webcam";
import iconArrowClockwise from '/arrow-clockwise.svg'
import testImg from '/Offsiteconstruction.jpg'
import iconCloseXmark from '/circle-xmark.svg'

function DcsmsCamera({modalShow, setModalShow, parentCallback}) {
  
  const [msg, setMsg] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  
  // 0 = show camera, 1 = show picture
  const [mode, setMode] = useState(0);

  const btnCapture = useCallback(() => {
    if(webcamRef.current && webcamRef.current.getScreenshot())
    {
      console.log('webcamRef.current');
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
    else {
      
      console.log('hardcode img', canvasRef);
      
      setImgSrc(testImg);
    }
    setMode(1);
  }, [canvasRef, webcamRef, setImgSrc]);
  
  const btnResetCanvas = ()=>{
    //console.log('btnResetCanvas', mode);
    if(imgSrc && mode==1)
    {
      let canvas = canvasRef.current;
      //canvas.width = testImg.width;
      //canvas.height = testImg.height;
      
      const img = new window.Image();
      img.src = imgSrc;
      //img.width = 800;
      //img.height = 566;
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      };
      
    }
  };
  
  useEffect(()=>{
    btnResetCanvas();
  }, [mode, imgSrc]);
  
  const btnCancel = () => {
    setMode(0);
  };
  
  const btnOk = () => {
    // 
    if( parentCallback )
    {
      parentCallback( imgSrc );
      setModalShow(false);
      setMode(0);
    }
  };
  
  const videoConstraints = {
    width: { min: 1080 },
    height: { min: 720 }
    //aspectRatio: 0.6666666667
  };
  
  const updateMousePosition = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    //x = e.clientX - 50;
    let y = e.clientY - rect.top;
    //y = e.clientY - 50;
    setMousePosition({ x, y });
  };
  
  const drawDot = (e) => {
    if(!mouseDown)
    {
      //return;
    }
    console.log('e.clientX e.clientY ',e.pageX,e.clientX, mousePosition.y, e.clientY);
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Draw the dot (a small circle)
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2); // x, y, radius, start angle, end angle
    ctx.fillStyle = 'red'; // Set the color of the dot
    ctx.fill();
    ctx.closePath();
  };

  const layout1 = (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={true}
      show={modalShow}
    >
      {/* Optional: Add content that stays at the top/grows */}
      <Row className={`flex-grow-1 ${mode==0? '':'d-none'}`}>
        <Col>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints} 
            width={1080}
            height={720}
          />
        </Col>
      </Row>

      {/* The div to be aligned to the bottom. 
          'mt-auto' pushes it to the bottom by adding a top margin automatically. */}
      <Row className={`mt-auto ${mode==0? '':'d-none'}`}>
        <Col className="d-grid">
          <Button onClick={()=>setModalShow(false)} variant="danger">Cancel</Button>
        </Col>
        <Col className="d-grid">
          <Button onClick={btnCapture} variant="primary">Take photo</Button>
        </Col>
      </Row>
        
      {/* Optional: Add content that stays at the top/grows */}
      <Row className={`flex-grow-1 ${mode==1? '':'d-none'}`}>
        <div className="col d-flex justify-content-center">
          <canvas 
            ref={canvasRef}
            className={styles.canvasContainer}
          ></canvas>
        </div>
      </Row>

      {/* The div to be aligned to the bottom. 
          'mt-auto' pushes it to the bottom by adding a top margin automatically. */}
      <Row className={`${mode==1? '':'d-none'}`}>
        <Col className="d-grid">
          <Button onClick={btnCancel}  variant="danger">Cancel</Button>
        </Col>
        <Col xs="auto">
          <img src={iconArrowClockwise} 
            onClick={btnResetCanvas} className={`logo`} />
        </Col>
        <Col className="d-grid">
          <Button onClick={btnOk}  variant="primary">OK</Button>
        </Col>
      </Row>
      
    {mode==2 && (<>
      <div className="row align-items-center">
        <div className="col justify-content-center">
          {imgSrc && ( <Image src={imgSrc} fluid /> )}
        </div>
      </div>
      
      <div className="row">
        <div className="col d-grid">
          <Button onClick={btnCancel} variant="danger">Cancel</Button>
        </div>
        <div className="col d-grid">
          <Button onClick={btnOk} variant="primary">OK</Button>
        </div>
      </div>
    </>)}
    
    </Modal>
  );

  return layout1;
}

export default DcsmsCamera
