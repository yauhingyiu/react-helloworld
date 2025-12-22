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
  const [msg, setMsg] = useState(null);
  
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);

  const [cameraDevices, setCameraDevices] = useState([]);
  const [images1, setImages1] = useState([]);
  const [imageCapture, setImageCapture] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  
  useEffect(() => {
    console.log('useEffect get canvas');
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
    console.log('useEffect get photo');
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
  
  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        // Request media access first to get device labels and IDs
        await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
        
        // Then enumerate devices
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();
        console.info("deviceInfos", deviceInfos);
        setCameraDevices( deviceInfos.filter(a=>a.kind === 'videoinput') );
      } catch (err) {
        console.error("Error enumerating devices:", err);
      }
    };

    getMediaDevices();
  }, []);
  
  useEffect(() => {
    console.log('videoRef', videoRef);
    console.log('imgRef', imgRef);
    return ()=>{};
  }, [videoRef, imgRef]);
  
  useEffect(() => {
    if(mediaStream)
    {
      const video = videoRef.current;
      setMsg(msg+' '+video);
      if (!video) {
        return;
      }
      
      video.srcObject = mediaStream;
      setMsg(msg+' setImageCapture ');
      setImageCapture( new ImageCapture(mediaStream.getVideoTracks()[0]) );
    
      //getCapabilities();
    }
    return ()=>{};
  }, [mediaStream]);


  
  
  // Get a video stream from the currently selected camera source.
  const getStream = (e) => {
    setMsg(msg+'getStream '+e.target.value);
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
      });
    }
    var videoSource = null;
    
    if(e && e.target && e.target.value) {
      videoSource = e.target.value;
    } else {
      videoSource = cameraDevices[0].deviceId;
    }
    constraints = {
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(gotStream)
      .catch(error => {
        console.log('getUserMedia error: ', error);
        setMsg(msg+'getUserMedia error: '+error);
      });
  }

  // Display the stream from the currently selected camera source, and then
  // create an ImageCapture object, using the video from the stream.
  const gotStream = (stream) => {
    setMediaStream( stream );
    
    
  }

  // Get the PhotoCapabilities for the currently selected camera source.
  const getCapabilities = () => {
    if(imageCapture)
    {
      imageCapture.getPhotoCapabilities().then(function(capabilities) {
        console.log('Camera capabilities:', capabilities);
        if (capabilities.zoom.max > 0) {
          zoomInput.min = capabilities.zoom.min;
          zoomInput.max = capabilities.zoom.max;
          zoomInput.value = capabilities.zoom.current;
        }
      }).catch(function(error) {
        console.log('getCapabilities() error: ', error);
      });
    }
  }

  // Get an ImageBitmap from the currently selected camera source and
  // display this with a canvas element.
  const grabFrame = () => {
    setMsg(msg+' grabFrame() ');
    if(imageCapture)
    {
      imageCapture.grabFrame().then( (imageBitmap) => {
        console.log('Grabbed frame:', imageBitmap);
        
        //setImages1( [...images1, imageBitmap] );
        setImages1( [imageBitmap] );
      }).catch(function(error) {
        console.log('grabFrame() error: ', error);
      });
    }
  }

  const setZoom = () => {
    if(imageCapture)
    {
      imageCapture.setOptions({
        zoom: zoomInput.value
      });
    }
  }

  // Get a Blob from the currently selected camera source and
  // display this with an img element.
  const takePhoto = () => {
    setMsg(msg+' takePhoto() ');
    if(imageCapture)
    {
      imageCapture.takePhoto().then(function(blob) {
        console.log('Took photo:', blob);
        setPhoto(blob);
      }).catch(function(error) {
        console.log('takePhoto() error: ', error);
      });
    }
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
            <option key={index} value={item.deviceId}>{item.label}&nbsp;{index}</option>
            ))
          }
        </select>
        </div>
      </div>
      
      <div className="row">
        <div className="col">
        <span>video</span>
        <video ref={videoRef} autoPlay playsInline></video>
        <span>img</span>
        <img ref={imgRef} />
        <span>canvas</span>
        <canvas ref={canvasRef}></canvas>
        </div>
      </div>
        
        
      <div className="row">
        <div className="col">
        {msg}
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default DcsmsCamera
