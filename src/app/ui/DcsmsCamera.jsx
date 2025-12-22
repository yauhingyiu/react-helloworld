import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';
import styles from './DcsmsCamera.css';
import {useFetchGetData, DATE_FORMAT_YYYYMMDD, DATE_FORMAT_YYYYMMDD_HHMM} from '../../services/ApiServices';

function DcsmsCamera() {
  
  const [photo, setPhoto] = useState(null);
  
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const [cameraDevices, setCameraDevices] = useState([]);
  const [images1, setImages1] = useState([]);
  
  let imageCapture;
  let mediaStream;
  
  useEffect(() => {
    // 2. Access the native HTML canvas element using the ref's .current property
    const canvas = canvasRef.current;

    // Ensure the canvas element exists (optional, but good practice)
    if (!canvas) {
      return;
    }

    if(images1 && images1.length>0)
    {
      let imageBitmap = images1[0];
      
      // 3. Get the 2D rendering context
      const ctx = canvas.getContext('2d');

      // Ensure the context was successfully obtained
      if (ctx) {
        // 4. Use the context to draw
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 150, 100); // Draws a blue rectangle
      }
      
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      ctx.drawImage(imageBitmap, 0, 0);
    }
  }, [images1]);
  
  useEffect(() => {
    const img = imgRef.current;

    // Ensure the canvas element exists (optional, but good practice)
    if (!img) {
      return;
    }
    
    if(photo) {
      //img.classList.remove('hidden');
      img.src = URL.createObjectURL(photo);
    }
  }, [photo]);
  
  
  // Get a list of available media input (and output) devices
  // then get a MediaStream for the currently selected input device
  navigator.mediaDevices.enumerateDevices()
    .then(gotDevices)
    .catch(error => {
      console.log('enumerateDevices() error: ', error);
    })
    //.then(getStream)
    ;

  // From the list of media devices available, set up the camera source <select>,
  // then get a video stream from the default camera source.
  function gotDevices(deviceInfos) {
    
    if(!deviceInfos)
    {
      console.log('!deviceInfos');
      return;
    }
    setCameraDevices( deviceInfos.filter(a=>a.kind === 'videoinput') );
  }

  // Get a video stream from the currently selected camera source.
  function getStream() {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
      });
    }
    var videoSource = videoSelect.value;
    constraints = {
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(gotStream)
      .catch(error => {
        console.log('getUserMedia error: ', error);
      });
  }

  // Display the stream from the currently selected camera source, and then
  // create an ImageCapture object, using the video from the stream.
  function gotStream(stream) {
    console.log('getUserMedia() got stream: ', stream);
    mediaStream = stream;
    video.srcObject = stream;
    video.classList.remove('hidden');
    imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
    getCapabilities();
  }

  // Get the PhotoCapabilities for the currently selected camera source.
  function getCapabilities() {
    imageCapture.getPhotoCapabilities().then(function(capabilities) {
      console.log('Camera capabilities:', capabilities);
      if (capabilities.zoom.max > 0) {
        zoomInput.min = capabilities.zoom.min;
        zoomInput.max = capabilities.zoom.max;
        zoomInput.value = capabilities.zoom.current;
        zoomInput.classList.remove('hidden');
      }
    }).catch(function(error) {
      console.log('getCapabilities() error: ', error);
    });
  }

  // Get an ImageBitmap from the currently selected camera source and
  // display this with a canvas element.
  function grabFrame() {
    imageCapture.grabFrame().then( (imageBitmap) => {
      console.log('Grabbed frame:', imageBitmap);
      
      //setImages1( [...images1, imageBitmap] );
      setImages1( [imageBitmap] );
    }).catch(function(error) {
      console.log('grabFrame() error: ', error);
    });
  }

  function setZoom() {
    imageCapture.setOptions({
      zoom: zoomInput.value
    });
  }

  // Get a Blob from the currently selected camera source and
  // display this with an img element.
  function takePhoto() {
    imageCapture.takePhoto().then(function(blob) {
      console.log('Took photo:', blob);
      setPhoto(blob);
    }).catch(function(error) {
      console.log('takePhoto() error: ', error);
    });
  }

  
  const layout1 = (
    <Container fluid>
      <div className="row align-items-center">
        <div className="col">
          <Button variant="primary" onClick={grabFrame}>Grab Frame</Button>
        </div>
        <div className="col">
          <Button variant="primary" onClick={takePhoto}>Take Photo</Button>
        </div>
      </div>
      &nbsp;
      <div className="row">
        <div className="col">
        <label htmlFor="videoSource">Video source: </label>
        <select id="videoSource" onChange={getStream}>
          {
            cameraDevices && cameraDevices.map( (item, index)=>(
            <option value={item.deviceId}>{item.label} + '&nbsp;' + {index}</option>
            ))
          }
        </select>
        </div>
      </div>
      
      <div className="row">
        <div className="col">
        <video autoPlay playsInline className={styles.hidden}></video>
        <span>img</span>
        <img ref={imgRef} />
        <span>canvas</span>
        <canvas ref={canvasRef}></canvas>
        </div>
      </div>
        
    </Container>
  );

  return layout1;
}

export default DcsmsCamera
