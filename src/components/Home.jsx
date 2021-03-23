import React from "react";
import "./css/home.css";
 import './css/animation.css'
import image from './resources/author_img.jpg';
import Nav from './Nav.jsx';
import resume from './resources/resume.pdf';
import Aboutme from './Aboutme';


function Home() {
 
  return (
    <div className="main-home-container" >
        <Nav />
        <div className="home-body">
          <div className='author-img-class'> 
      <img src={image}  alt="authorPic" className='AuthorPic'/>
          </div>
          <div className="about-author">
                <Aboutme />
               <a href={resume} download className='author-resume'> 
                <span className="glyphicon glyphicon-cloud-download download-icon"></span>
                         DownLoad Resume
                         <span className="h1"></span>
                         <span className="c1"></span>
                         <span className="h2"></span>
                         <span className="c2"></span>
                         
               </a>
          </div>
         </div>
    </div>
  );
}

export default Home;
