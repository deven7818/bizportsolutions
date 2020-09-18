
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'; 
import './navbar.style.css';
import {Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function navbar() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand text-primary blogo " to="#" alt=""><b>BIZPORT SOLUTIONS</b></Link>
          <button className="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
              <Link className="nav-link" to="/"><b>HOME</b></Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"><b>ABOUT</b></Link>
              </li>
 
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown"role="button"><b>SERVICES</b></Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item product" to="/Customised"><b>CUSTOMIZED DEVELOPMENT</b></Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="/MobileApp"><b>MOBILE APP DEVELOPMENT</b></Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="/Webpage"><b>WEBPAGE DEVELOPMENT</b></Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"><b>PRODUCTS</b></Link>
                <div className="dropdown-menu" style={{left:"-140%"}} aria-labelledby="navbarDropdown">
                 
                  <Link className="dropdown-item product" to="/retailclick"><b>RETAIL-CLICK</b></Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="/Cent"><b>CENTRALIZED STORE MNGT SYSTEM</b></Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="/ERetail"><b>E-RETAIL</b></Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact"><b>CONTACT US</b></Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
}


export default navbar;
