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
    'jobDescription':'Construction Site Mobile System) including requirements collection, system analysis and design, application development, testing and program deployment, etc.<br/><br/>-	To lead programmers for providing enhancement, maintenance and support services.<br/><br/>-	To liaise with end users and internal IT support teams for project implementation and maintenance support services.',
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
    'period1':'Nov 2023 - Jun 2024',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'-	Banking application development and enhancement<br/><br/>-	Design, develop, test and support Bank Compliance systems<br/><br/>-	Conduct unit test, system test, stress test, UAT<br/><br/>-	Prepare functional and technical documentation<br/><br/>-	System rollout and support<br/><br/>-	Liaise with vendor on system support and maintenance<br/><br/>- Participate in daily system support and maintenance',
    'clientName':'China Citic Bank International',
    'clientAddress':'One Taikoo Place',
    'clientIcon':'',
    'agentName':'IT Solutions',
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
    'period1':'Feb 2022 - Oct 2023',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'-	Develop and maintain “Client Information System” using Spring Boot, Angular and TypeScript<br/><br/>-	Develop hundreds of tailor-made reports using JasperSoft<br/>-	Lead programmers for system implementation, UAT support and maintenance services in daily operation<br/>-	Collect user requirements and assist social workers in preparation of testing scenario<br/>-	Quality control on automatic steps recording and reperformance in web application using Playwright Python and JMeter<br/>-	Provide solutions or workaround for technical issues and security vulnerabilities found in App Scan<br/>-	Explore new software technologies for the Speech to Text function<br/>-	Perform feasibility study and system design on the migration of reports from Oracle BI to Jasper',
    'clientName':'Social Welfare Department',
    'clientAddress':'Kowlook Bay',
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
    'period1':'Apr 2019 - Mar 2022',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'-	Development / maintenance of Bank of China mobile app using J2EE, IBM DB2, Redis, Spring Framework, etc.<br/><br/>-	Developed the online account opening function for Bank of China mobile app, which was released on early 2020<br/>-	Developed the “forgot username” function for Bank of China. Users take photo of id card, selfie and verify the phone number by otp. They can retrieve their username if they pass the validation process.<br/>-	Enhanced the soft token registration workflow for Bank of China mobile app, which was released on 2 May 2021. User is required to take photo of id card and selfie during the registration process.<br/>-	Developing the online account opening function for Nanyang Commercial Bank, which will be released in December 2021.<br/>-	Monitoring control m jobflow automation.<br/>-	Production support and adhoc production fixes.<br/>-	Analyze user requirement, feasibility study and assign tasks to mainland teammates<br/>-	Document the technical detail of newly-developed functions<br/>-	Code review<br/>-	Web site security enhancement',
    'clientName':'E-Banking Team, Bank of China',
    'clientAddress':'Fo Tan',
    'clientIcon':'',
    'agentName':'IT Solutions',
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
    'period1':'May 2017 - Apr 2019',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'- Develop RESTful Java Web Service to facilitate different web applications. The web services are hosted in Oracle Weblogic server. Services including <br/><br/>1. Changing password for an user account; <br/>2. Get the expiry date of a project / staff / student account; <br/>3. Get the program list a student is studying; <br/>4. Extend a user account to a specific date; <br/>5. Disable a user account by input an university id<br/><br/>- Implement 2FA using TOTP / DUO to login page of some web applications<br/>- ServiceNow: UI Page / Widget programming using Angular JS; incident management; change management<br/>- Oracle Identity Management: Application development, enhance workflow and user account provisioning according to requirement<br/>- Project account application: A Spring MVC Web Application for CUHK staffs / students to apply project account<br/>- ITSC directory: A Java servlet web application for searching CUHK staff and students<br/>- Web site security enhancement (Anti Xss, CSRF, Sql injection, etc)',
    'clientName':'The Chinese University of Hong Kong',
    'clientAddress':'Shatin, NT',
    'clientIcon':'',
    'agentName':'-',
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
    'period1':'Aug 2013 - May 2017',
    'period2':'',
    'jobTitle':'System Analyst',
    'jobDescription':'- Provide solution to projects to support the separation of Nanyang Commercial Bank from Bank of China<br/><br/>- Web application development using JAVA/J2EE/JQUERY/HTML/XML<br/>- Experience with design patterns and web services<br/>- Experience with MVC framework.<br/>- Directly report to project manager.<br/>- Production deployment for every 6 months.<br/>- Production support and adhoc production fixes.<br/>- Monitoring control m jobflow automation.<br/>- Data migration from Db2 8.0 to Db2 9.<br/>- Web site security enhancement (Anti Xss, CSRF, etc)',
    'clientName':'Risk Management Team, Bank of China',
    'clientAddress':'Wan Chai',
    'clientIcon':'',
    'agentName':'Excel',
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
    'period1':'Sept 2012 - Aug 2013',
    'period2':'',
    'jobTitle':'Analyst Programmer',
    'jobDescription':'-	Web application development using JAVA/J2EE/JQUERY/HTML/XML<br/><br/>-	Meeting with user to obtain user requirements<br/><br/>-	Experience with design patterns and web services <br/><br/>-	Experience with MVC framework.<br/><br/>-	Directly report to project manager.<br/><br/>-	Production support and adhoc production fixes.<br/><br/>-	Web site security enhancement (Anti Xss, CSRF, etc)',
    'clientName':'Food, Environment and Hygiene Department (FEHD)',
    'clientAddress':'Admiralty',
    'clientIcon':'',
    'agentName':'EDPS',
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
    'period1':'Feb 2012 - Aug 2012',
    'period2':'',
    'jobTitle':'Analyst Programmer',
    'jobDescription':'Develop and maintain J2EE applications for MPFA',
    'clientName':'Mandatory Provident Fund Schemes Authority (MPFA)',
    'clientAddress':'Ngau Tau Kok',
    'clientIcon':'',
    'agentName':'Global Executive',
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
    'period1':'Oct 2010 - Jun 2012',
    'period2':'',
    'jobTitle':'Analyst Programmer',
    'jobDescription':'Develop and maintain J2EE applications for Bank of China',
    'clientName':'Risk Management Team, Bank of China',
    'clientAddress':'Fo Tan',
    'clientIcon':'',
    'agentName':'ASL',
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
    'period1':'Mar 2010 - Oct 2010',
    'period2':'',
    'jobTitle':'Analyst Programmer',
    'jobDescription':'-	Develop J2EE applications for Poly University<br/><br/>-	Meeting with user to obtain user requirements',
    'clientName':'Finance Office, Poly University',
    'clientAddress':'Hung Hom, Kowloon',
    'clientIcon':'',
    'agentName':'Manpower',
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
    'period1':'Oct 2008 - Mar 2010',
    'period2':'',
    'jobTitle':'Programmer',
    'jobDescription':'-	Develop J2EE applications for Hong Kong Airport Authority<br/><br/>- Perform adhoc load test for web applications',
    'clientName':'Hong Kong Airport Authority',
    'clientAddress':'Hong Kong Airport',
    'clientIcon':'',
    'agentName':'Manpower',
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
