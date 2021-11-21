 import React from 'react';
 import { Link } from "react-router-dom";
 import "./css/skills.css";
 import {Container , Row, Col} from 'react-bootstrap';
 import skills from "./skillsData.jsx";
 console.log(skills);
 function Skills() {
      let str = skills.map((skill,index)=>{
 return   <Col key ={index} md={4} lg={4} sm={12} className="hover_effect">
    <img src= {skill.img} 
    className="skills_icon" alt= {skill.alt} />
      <span className='description'>{skill.description}</span>
   </Col>
})

    return (
        <div className="skills"> 
<Link to="/" className ="homePage"></Link>
         <h1>Skills... </h1>
             <hr />
            <Container>
                <Row>
            {str} 
                </Row>
            </Container>
        </div>
    )
}

export default Skills
