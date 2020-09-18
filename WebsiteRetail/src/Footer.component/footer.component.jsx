import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import './footer.style.css';

function Footer() {
    return (

        <div className="main-footer">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        {/* Column 1*/}
                        <div className="col-md-4 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                
                                <li>Lane no.11,Gauri Apartment</li>
                                <li>Flat no.103,Dhanori,</li>
                                <li>Pune-411015</li>
                                <li>MO-: +91-8605575578 </li>
                            </ul>
                        </div>

                        {/* Column 2*/}
                        <div className="ft col-md-4 col-sm-6">
                            <h4>Services</h4>

                            <ul className="list-unstyled">

                                <li><Link href="#top" to="Customised">Customized Development</Link></li>
                                <li><Link to="MobileApp">Mobile App Development</Link></li>
                                <li><Link to="Webpage">Webpage Development</Link></li>

                                <br />
                                

                            </ul>

                        </div>



                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xt-center">
                            &copy;{new Date().getFullYear} RetailClick - All Rights Reserved
                </p>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Footer;
