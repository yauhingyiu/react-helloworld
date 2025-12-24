import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from './Yky.module.css'
import profilePng from '../../assets/profile.png'
import aboutJpg from '../../assets/about.jpg'

//https://themewagon.github.io/resume-2/
function Yky() {
  const [count, setCount] = useState(0);
  const [faviconUrl, setFavconUrl] = useState('/aaa.ico');
  
  
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
    document.title = 'Hello';
  }, [faviconUrl]);




  const data = [
  {
    'period1':'Jul 2024 - Now',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'responsible for axxxxaaabbbbresponsible <em><b>AAA</b></em> axxxxaaabbbbresponsible for axxxxaaabbbbresponsible for axxxxaaabbbb',
    'clientName':'Housing Authority',
    'clientAddress':'Ho Man Tin',
    'clientIcon':'',
    'agentName':'Infotech Services (HK) Limited',
    'tags':[
      'java',
      'springframework',
      'jquery',
      'oracledb',
      'angular',
      'typescript'
    ],
    'remark':''
  }
  ];

  const layout1 = (
    <Container fluid className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={`row ${styles.divcontainer1}`}>
          <div className={styles.header1}>I'm</div>
          <div className={styles.header2}>Michael Miller</div>
        </div>
        <div className={`row ${styles.divcontainer2}`}>
          <div className={`col ${styles.divcontainer2a}`}></div>
          <div className={`col ${styles.divcontainer2b}`}></div>
        </div>
        
        <div className={`row ${styles.divcontainer4}`}>
          <div className={styles.containerCaption}>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={`row ${styles.divcontainer5}`}>
          <div className="col-5 col-xs-12">
            <img src={aboutJpg} className={styles.aboutImg} />
          </div>
          <div className="col-7 col-xs-12 text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
          </div>
        </div>
        
        <div className={`row ${styles.divcontainer4}`}>
          <div className={styles.containerCaption}>
            <h2>Education</h2>
          </div>
        </div>
        
        <div className={`row ${styles.divcontainer5}`}>
          
          <div className="col">
          
            <div className={styles.educationContainer}>
              <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
              <h3>Master Degree</h3>
              <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
            </div>
            
            <div className={styles.educationContainer}>
              <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
              <h3>Master Degree</h3>
              <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
            </div>
          
          </div>
        </div>
        
        <br/>
        <div className="row">
          <div className="col align-items-center">
          <p>&copy; Copyright <a href="#">Yahoo</a>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Container>
  );

  return layout1;
}

export default Yky
