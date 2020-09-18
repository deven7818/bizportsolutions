import React from 'react'; 
 import {Link} from 'react-router-dom';
  

function navbar() {
    return (
    <div className="container-fluid">

        <nav className ="navbar navbar-expand-md bg-dark navbar-dark">
        
                <a href="/" className="navbar-brand text-danger font-weight-bold" ><h6>RETAILCLICK</h6></a>

                <button className = "navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#collapsenavbar">
                            <span className="navbar-toggler-icon"> </span>
                </button>

                <div className= "collapse navbar-collapse " id ="collapsenavbar">
                    <ul className ="navbar-nav ml-auto">       
                        <li className="nav-item">
                            <a href ="/" className ="nav-link text-white"> HOME </a>
                        </li>
                        <li className="nav-item">
                            <a href ="/about" className ="nav-link text-white"> ABOUT </a>
                        </li>
                            
                        <div class="dropdown">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                                SERVICES
                            </button>
                            <div className="dropdown-menu bg-dark">

                                <a className="dropdown-item text-light" ><Link to="/RFID">RFID SOLUTIONS</Link></a>
                                <a className="dropdown-item text-light"><Link to="/Customised">CUSTOMIZED DEVELOPMENT</Link></a>
                                <a className="dropdown-item text-light"><Link to="/MobileApp">MOBILE APP DEVELOPMENT</Link></a>
                            </div>
                        </div>
                        
                        <li className="nav-item">
                        <a href ="/contact" className ="nav-link text-white"> CONTACT </a>
                            
                        </li>
                        
                        <button className="btn btn-primary navbar-btn">Ask For Demo</button> 
                </ul>
            </div>
        </nav>
       
       </div>
    );
}


export default navbar;
