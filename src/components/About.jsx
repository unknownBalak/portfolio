import React from "react";
import "./css/aboutAuthor.css";
import image from "./resources/author_img.jpg";
import hook from "./resources/hook.png";
import { Link } from "react-router-dom";
import "./css/About.css";

function About() {
  return (
    <div className="aboutAuthor">
      <Link to="/" className="croosIcon"></Link>
      <div className="AuthorDetails">
        <div className="hookImage">
          <img src={hook} alt="pin" className="hookClass" />
        </div>
        <img src={image} alt="authorPic" className="AuthorPic AuthorPic1" />
        <p>Let's connect</p>
        <ul className="social-link">
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/shashi-tiwari-350450182/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/unknownBalak" rel="noreferrer" target="_blank">
              {" "}
              GitHub{" "}
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/shashi-tiwari-350450182/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Twitter{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="AuthorDescrition">
        <h1>Who Am I?</h1>
        <p>
          {" "}
          <span>Namaste </span>, I'm Shashi, a graduate and full-time learner who loves to build fast, 
          robust and Scalable User Interfaces. I am a self-thought web developer. I love to develop things that add value to society and guide people on their path
        </p>
        <p>
          {" "}
          I love to explore new thing, meet new people, guide people. I listen to podcasts and read books. And, I love 
           to travel.
        </p>
        <p>
          I am from Bihar, currently staying in Bangalore. I completed my graduation from Reva University in 2021.
        </p>
      </div>
      <div className="qualification">
        <h1>Education Journey</h1>
        <ul>
          <li>
            <h3 className="higherStudy">Bachelor in Science</h3>
            <ul>
              <h4>
                <span className="hl">In</span> Maths, Statistics &amp; Computer Science
              </h4>
              <p>Reva University</p>
            </ul>
          </li>
          <hr className="hr" />
          <li>
            <h3 className="higherStudy">Higher Secondary Education (HSC)</h3>
            <ul>
              <h4>
                {" "}
                <span className="hl">In</span> Physics Chemistry &amp; Maths
              </h4>
              <p>D.A.V PG College Siwan</p>
            </ul>
          </li>
          <hr className="hr" />
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
            <h3 className="occupation">Full stack Intern (5/21 to continue)</h3>
            <ul>
              <p>
              <span className="hl"></span>
         This is a product-based start-up. I was working on MERN stack application. I majorly develop UI.
                 For build, I used React, Nodejs, Postgres, Express, and some library. 
       I achieved 60% more fast result after using merge-sort algorithm to sort the fetched data from backend. Here I 
                 learnt Ownership, Open to learn new technologies &amp; Be collaborative with colleague. 
              </p>
            </ul>
          </li>
          <hr className="hr" />
          <li>
            <h3 className="occupation">Mentor / Instructor</h3>
            <ul>
              <p>I have guided many students to create their own Interactive and scalable user Interfaces.</p>
            </ul>
          </li>
          <hr className="hr" />
          <li>
            <h3 className="occupation">Blogger</h3>
            <ul>
              <p>
               <p> Here is my some work</p>
                <span className="hl"></span> 
                <Link
              to={{ pathname: "https://bit.ly/2ZiFNye" }}
              target="_blank"
              className="blogLink"
              rel="noreferrer"
            >
             Fall in Love with Object In JavaScript
            </Link>
                <Link
              to={{ pathname: "https://bit.ly/3CLNgmS" }}
              target="_blank"
              rel="noreferrer"
              className="blogLink"
            >
            ToDo application using meteor application
            </Link>
                <Link
              to={{ pathname: "https://bit.ly/3oQBMJX" }}
              target="_blank"
              rel="noreferrer"
              className="blogLink"
            >
            Interactive pricing Component challenge explanation
            </Link>
              </p>
            </ul>
          </li>
          <hr className="hr" />
          <li>
            <h3 className="occupation">Web Developer</h3>
            <ul>
              <p>
                A freelancer looking for Opportunity
                <span className="hl"></span> to develop a fast &amp; robust user Interfaces.
              </p>
            </ul>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default About;
