import React from 'react'
import "./css/nav.css";
import "./css/animation.css";

function Nav() {
       return (
        <nav className='main-navigation-bar'>
             <div className="brand-logo">
                  Logo
             </div>
             <ul className="nav-key">
                   {/* <span className='appendChild'></span> */}
                     <li> <a href="#"> My Journey </a></li>
                     <li> <a href="#"> Contact </a></li>
                     <li> <a href="#"> Video Intro </a></li>
                     <li> <a href="#"> Skills </a></li>
             </ul>
        </nav>
    )
}

export default Nav
