import React from 'react'; 
import './css/aboutAuthor.css';
import image from './resources/author_img.jpg';
import hook from './resources/hook.png';
import { Link } from "react-router-dom";
import './css/About.css'

function About() {
    return (
        <div className="aboutAuthor">
          <Link to="/" className ="croosIcon"></Link>
                 <div className="AuthorDetails">
                  <div className="hookImage">
                      <img src={hook} alt="pin" className="hookClass"/>
                  </div>
                 <img src={image} alt="authorPic" className='AuthorPic AuthorPic1'/>
                      <p>Let's connect</p>
                       <ul className="social-link">
                     <li> <a href="https://www.linkedin.com/in/shashi-tiwari-350450182/" rel='noreferrer' target="_blank"> LinkedIn </a></li>
                     <li> <a href="https://github.com/unknownBalak" rel='noreferrer' target="_blank"> GitHub </a></li>
                     <li> <a href="https://www.linkedin.com/in/shashi-tiwari-350450182/" rel='noreferrer' target="_blank"> Twitter </a></li>

                       </ul>

                     </div>          
        <div className="AuthorDescrition">
             <h1>Who Am I?</h1>
        <p> <span>Namaste </span>, 
    I'm Shashi, a graduate and full-time learner who loves to build fast, robust and Scalable User Interfaces. I started with web development in April 2020. I am a self-thought web developer
  </p>
 <p> I enjoy working on all things Web, and always look forward to meeting new people, learning, and talking about my interests and experience over a hot beverage.
 </p>               
 <p>I am from Bihar, currently staying in Bangalore. I did my graduation from Reva University. Currently, I am pursuing a course in DSA on "Udemy" in javaScript. </p>           
            </div>  
<div className="qualification">
   <h1>Education Journey</h1>
      <ul>
        <li>
        <h3 className='higherStudy'>Bachelor in Science</h3>
          <ul>
          <h4><span className='hl'>In</span> Maths, Statistics &amp; Computer Science</h4>
           <p>Reva University</p>   
          </ul>
        </li>
        <hr className='hr'/>
        <li>
        <h3 className="higherStudy">Higher Secondary Education (HSC)</h3>
          <ul>
          <h4> <span className="hl">In</span> Physics Chemistry &amp; Maths</h4>
           <p>D.A.V PG College Siwan</p>   
          </ul>
        </li>
        <hr className='hr'/>
        <li>
        <h3 className="higherStudy">Secondary School Education (SSLC)</h3>
          <ul>
           <p>G.D.K.High School Siwan</p>   
          </ul>
        </li>
      </ul>
       
   </div>
   <div className="experiance">
   <h1>Experiance</h1>
      <ul>
        <li>
        <h3 className='occupation'>Web Developer</h3>
          <ul>
          <p>A freelancer looking for Opportunity
            <span className='hl'></span> to develop a fast &amp; robust user Interfaces.</p>
          </ul>
        </li>
        <hr className='hr'/>
        <li>
        <h3 className='occupation'>Mantor / Instructor</h3>
          <ul>
          <p>I have guided many students to create user Interface.</p>
          </ul>
        </li>
    </ul>
       
   </div>
  
   </div>



    )
}

export default About
