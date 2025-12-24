import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Yhy.module.css';

//https://themewagon.github.io/resume-2/
function Yhy() {
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
  },
  {
    'period1':'Oct 2023 - Jul 2024',
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
    <Container fluid className={` ${styles.container1}`}>
      
      
      <div className="row">
        <div className="col-md-12">
          <div id="content">
                
            <div className={styles.profile}>
              <div className={styles.profileHeader}>
         
                <div className={styles.profileHeaderCover}></div>
         
                <div className={styles.profileHeaderContent}>
         
                  <div className={styles.profileHeaderImg}>
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                  </div>
         
                  <div className={styles.profileHeaderInfo}>
                    <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                    <p className="m-b-10">&nbsp;</p>
                    <p className="m-b-10">Experienced System Analyst</p>
                    {/*<a href="#" className="btn btn-sm btn-info mb-2">Edit Profile</a>//*/}
                  </div>

                </div>
                      {/*
                      <ul className="profile-header-tab nav nav-tabs">
                         <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-with-timeline-posts" target="__blank" className="nav-link_">POSTS</a></li>
                         <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-about" target="__blank" className="nav-link_">ABOUT</a></li>
                         <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-photos" target="__blank" className="nav-link_">PHOTOS</a></li>
                         <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-videos" target="__blank" className="nav-link_">VIDEOS</a></li>
                         <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list" target="__blank" className="nav-link_ active show">FRIENDS</a></li>
                      </ul>
                      //*/}
              </div>
            </div>
                
            <div className={styles.profileContent}>
                
              <div className={`${styles.tabContent} p-0`}>
                
                <div className={`${styles.tabPane} fade active show`} id="profile-post">
                
                  <ul className={styles.timeline}>
                  
                  {
                    data.map((a, index)=>(
                      <li key={index}>
                
                        <div className={styles.timelineTime}>
                          <span className={styles.date}>{a.period1}&nbsp;&nbsp;</span>
                          <span className={styles.time}>{a.jobTitle}</span>
                        </div>

                         <div className={styles.timelineIcon}>
                            <a href="#">&nbsp;</a>
                         </div>

                         <div className={styles.timelineBody}>
                            <div className={styles.timelineHeader}>
                               <span className={styles.userimage}><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></span>
                               <span className={styles.username}>{a.clientName}<a href="#"></a> <small></small></span>
                               <span className={``}>{a.clientAddress? '('+a.clientAddress+')':''}</span>
                            </div>
                            <div className={styles.timelineContent} dangerouslySetInnerHTML={ {__html: '<p>'+a.jobDescription+'</p>'} }>
                               
                            </div>
                            <div className={styles.timelineLikes}>
                               <div className="text-end">
                                  <span className={`${styles.statsText}`}>{a.tags.map((b, index)=>(b+' '))}</span>
                                  <span className={styles.statsText}></span>
                               </div>
                               <div className={styles.stats}>
                                  <span className="fa-stack fa-fw stats-icon">
                                  <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                  <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                  </span>
                                  <span className="fa-stack fa-fw stats-icon">
                                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                  <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                  </span>
                                  <span className="stats-total"></span>
                               </div>
                            </div>
                            <div className={styles.timelineFooter}>
                            {/*
                               <a href="#" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                               <a href="#" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                               <a href="#" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                            //*/}
                            </div>
                            {/*
                            <div className="timeline-comment-box">
                               <div className="user"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                               <div className="input">
                                  <form action="">
                                     <div className="input-group">
                                        <input type="text" className="form-control rounded-corner" placeholder="Write a comment..."/>
                                        <span className="input-group-btn p-l-10">
                                        <button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                        </span>
                                     </div>
                                  </form>
                               </div>
                            </div>
                            //*/}
                         </div>

                      </li>
                    ))
                  }
                  </ul>

                </div>
                      
              </div>
                   
            </div>
                
          </div>
        </div>
      </div>

    </Container>
  );

  return layout1;
}

export default Yhy
