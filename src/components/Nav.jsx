import React from 'react'
import "./css/nav.css";
import "./css/animation.css";

function Nav() {
       return (
        <nav className='main-navigation-bar'>
             <div className="brand-logo">
             </div>
             <ul className="nav-key">
                     <li> <a href="www.google.com"> My Journey </a></li>
                     <li> <a href="www.google.com"> Contact </a></li>
                     <li> <a href="www.google.com"> Intro </a></li>
                     <li> <a href="www.google.com"> Skills </a></li>
             </ul>
        </nav>
    )
}

export default Nav
