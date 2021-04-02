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
                     <li> <Link to="/skill"> Skills </Link></li>
                     <li> <Link to="/project"> Project </Link></li>
                     <li> <Link to="/contact"> Contact </Link></li>
             </ul>
        </nav>
    )
}

export default Nav
