import React from 'react'
import './css/project.css'
import {Link } from "react-router-dom";
import music1 from './resources/projectWork/musicAppClone1.png';
// import music2 from './resources/projectWork/musicAppClone2.png';
// import music3 from './resources/projectWork/musicAppClone3.png';
function Project() {
    return (
        <div className="projects">
            <Link to="/" className ="homePage crossIcon1"></Link>
            <div className="project project1">
                  <img src={music1} alt="project1" />
              <div className="aboutProject">
                  <h1 style={{color:"white"}}>MusicApp</h1>
                  <p>I have used only CSS and HTML to build this This was fun project for me. The design is created by @devED.      
                     click <a href="https://unknownbalak.github.io/musicAppClone/index.html"target="_blank" rel="noreferrer" style={{color:"#07f545",fontSize:"20px",fontWeight:"bold"}} >Here</a> to preview
        . Here is Source <a href="https://github.com/unknownBalak/musicAppClone" target="_blank" rel="noreferrer" style={{color:"#07f545",fontSize:"20px",fontWeight:"bold"}} >Code</a>   
                       </p>
              </div>
            </div>
            <div className="project project2">
            </div>
            <div className="project project3">
            </div>

        </div>
    )
}

export default Project
