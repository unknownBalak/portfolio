import React, { useRef,useState,useEffect } from "react";
import "./css/home.css";
 import './css/animation.css'
import image from './resources/author_img.jpg';
import Nav from './Nav.jsx';
import resume from './resources/resume.pdf';


function Home() {
    let [i, setI] = useState(0);
  const h1Ref = useRef();
  let arr  = [
    "I am Shashi",
    "I am a FrontEnd Developer",
    "I am a content creator"
  ];
 useEffect(()=>{
   let timer = setInterval(()=>{
         if(i===3)
         { 
           setI(i=0);
         }else{
          setI(i++);
          } 
          h1Ref.current.textContent= arr[i];         
   },4000)
  return () => clearInterval(timer);
},[])
 
  return (
    <div className="main-home-container" >
        <Nav />
        <div className="home-body">
          <div className='author-img-class'> 
      <img src={image}  alt="authorPic" className='AuthorPic'/>
          </div>
          <div className="about-author">
               <h1 ref={h1Ref} >{arr[i]}</h1>
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
