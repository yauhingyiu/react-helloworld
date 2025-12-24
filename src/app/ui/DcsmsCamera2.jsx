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
import styles from './DcsmsCamera2.module.css';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';
import Webcam from "react-webcam";
import iconArrowClockwise from '/arrow-clockwise.svg'
import iconCamera from '/camera-solid-full.svg'
import iconLightBlub from '/lightbulb-solid-full.svg'
import testImg from '/Offsiteconstruction.jpg'
import iconCloseXmark from '/circle-xmark.svg'
import {Camera} from "react-camera-pro";
/*
<select
          onChange={(event) => {
            setActiveDeviceId(event.target.value);
          }}
        >
          {devices.map((d) => (
            <option key={d.deviceId} value={d.deviceId}>
              {d.label}
            </option>
          ))}
        </select>


        
<ChangeFacingCameraButton
          disabled={numberOfCameras <= 1}
          onClick={() => {
            if (camera.current) {
              const result = camera.current.switchCamera();
              console.log(result);
            }
          }}
        />
*/

function DcsmsCamera2({modalShow, setModalShow, parentCallback}) {
  
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  //const [image, setImage] = useState<string | null>(null);
  const [image, setImage] = useState(testImg);
  const [showImage, setShowImage] = useState(false);
  const camera = useRef(null);
  //const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [devices, setDevices] = useState([]);
  const [activeDeviceId, setActiveDeviceId] = useState(undefined);
  const [torchToggled, setTorchToggled] = useState(false);

  useEffect(() => {
    (async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((i) => i.kind == 'videoinput');
      setDevices(videoDevices);
    })();
  });

  return (
    <div className={`${styles.wrapperComponent} ${modalShow? '':'d-none'}`}>
      {showImage ? (
      <>
        <img className={styles.fullScreenImagePreviewComponent}
          src={image}
        />
        
        <div className={styles.imgControlComponent}>
        
          <img
            className={styles.closeButtonComponent}
            onClick={() => {
              setShowImage(false);
            }}
          />
          
          <img
            className={styles.checkButtonComponent}
            onClick={() => {
              parentCallback(image);
              setModalShow(false);
            }}
          />
          
          
        </div>
      </>
      ) : (
        //camera
        //videoSourceDeviceId={activeDeviceId}
        camera.current? (
          <Camera
            ref={camera}
            aspectRatio="cover"
            facingMode="environment"
            numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
            
            errorMessages={{
              noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
              permissionDenied: 'Permission denied. Please refresh and give camera permission.',
              switchCamera:
                'It is not possible to switch camera to different one because there is only one video device accessible.',
              canvas: 'Canvas is not supported.',
            }}
            videoReadyCallback={() => {
              console.log('Video feed ready.');
            }}
          />
        ):(
          <video className={styles.video1} loop={true} autoPlay controls muted>
            <source type="video/mp4" />
          </video>
        )
      )}
      <div className={styles.controlComponent}>
        
        <img className={styles.imagePreviewComponent}
          src={image}
          onClick={() => {
            setShowImage(!showImage);
          }}
        />
        
        <img
          className={styles.closeButtonComponent}
          onClick={() => {
            setModalShow(false);
          }}
        />
        
        <img
          className={`${styles.torchButtonComponent} ${torchToggled ? styles.toggled : ''}`}
          onClick={() => {
            if (camera.current && camera.current.torchSupported) {
              setTorchToggled(camera.current.toggleTorch());
            } else {
              setTorchToggled(!torchToggled);
            }
          }}
        />
        
        <img className={styles.takePhotoButtonComponent}
          onClick={() => {
            if (camera.current) {
              const photo = camera.current.takePhoto();
              console.log(photo);
              setImage(photo);
            }
          }}
        />
        
        
      </div>
    </div>
  );
}

export default DcsmsCamera2
