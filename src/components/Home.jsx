import React  from "react";
import "./css/home.css";
 import './css/animation.css'
import image from './resources/author_img.jpg';
import Nav from './Nav.jsx';
import resume from './resources/resume.pdf';


function Home() {
  let arr  = [
    "I am Shashi",
    "I am a FrontEnd Developer",
    "I am a content creator"
  ];
  return (
    <div className="main-home-container" >
        <Nav />
        <div className="home-body">
          <div className='author-img-class'> 
      <img src={image}  alt="authorPic" className='AuthorPic'/>
          </div>
          <div className="about-author">
               <h1>{arr[0]}</h1>
               <a href={resume} download className='author-resume'> 
                <span class="glyphicon glyphicon-cloud-download download-icon"></span>
           
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
