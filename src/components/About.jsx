import React from 'react'; 
import './css/aboutAuthor.css';
import image from './resources/author_img.jpg';
import hook from './resources/hook.png';

import './css/About.css'

function About() {
    return (
        <div className="aboutAuthor">
                 <div className="AuthorDetails">
                  <div className="hookImage">
                      <img src={hook} alt="pin" className="hookClass"/>
                  </div>
                 <img src={image}  alt="authorPic" className='AuthorPic AuthorPic1'/>
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

     
   </div>


</div>

    )
}

export default About
