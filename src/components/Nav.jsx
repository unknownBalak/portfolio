import React from 'react'
import "./css/nav.css";
import "./css/animation.css";
import { Link } from "react-router-dom";


function Nav() {
       return (
        <nav className='main-navigation-bar'>
             <div className="brand-logo">
             </div>
             <ul className="nav-key">
                     <li> <Link to="/about"> My Journey </Link></li>
                     <li> <a href="www.google.com"> Contact </a></li>
                     <li> <a href="www.google.com"> Intro </a></li>
                     <li> <a href="www.google.com"> Skills </a></li>
             </ul>
        </nav>
    )
}

export default Nav
