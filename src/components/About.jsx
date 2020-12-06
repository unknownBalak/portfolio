import React from 'react'
import './css/About.css'
import image from './resources/author_img.jpg'
import GetAppIcon from '@material-ui/icons/GetApp';
function About() {
    return (
        <div className="about">
             <div className="image"> 
              <img src={image}  alt="shashi'sphoto" width="300" style={{borderRadius:"50%",marginTop:"30px", marginLeft:"30px"}}/>
             </div>
             <div className="About_author" >
               <div className="about__me"> <h2>About Me</h2>
                  <p>Hello, This is Shashi from Bangalore. I am learning React with Clever Programming and Aspiring to get job in FAANG as a REACT Dev.</p>
                  </div>
               <div className="contact">
                   <div className='contact__details' style={{width:"50%"}}>
                       
                       <h2>Contact Details</h2>
                     <p>
                     <h3>SHASHI BHUSHAN KUMAR TIWARI</h3>
                         <p>Bangalore Karnataka, 560064</p>
                         <p>+91 7763008284</p>
                        <p> dev.shashib16@gmail.com</p>
                    </p>
                        
                    </div>
                   <div className="author_resume"> <GetAppIcon  className="download__icon"/><span> Download Resume</span> </div>
               </div>
               
             </div>
        </div>
    )
}

export default About
