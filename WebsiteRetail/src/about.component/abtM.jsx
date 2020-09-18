import React from 'react';
 import { Jumbotron } from 'react-bootstrap';
 import './abtM.style.css';
function Abo  () {
    return(
    <div className=" abtbgclr  animated animatedFadeInUp fadeInUp">
    <div id="aboutsld" className="carousel slide" data-ride="carousel">
      <div className="text-center mb-3 text-dark">
        <br />
        <br />

        <h1 className="hzoom"	>ABOUT</h1>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
              <div className="iconcenter" > <i className="iconcenter fas fa-comment-dots fa-4x"></i>  </div>
            <h4 className="text-center">Tell Us What You Need</h4>
            <p className="text-center">
              Our engineers develop new features using the latest
              technology to deliver a user-friendly, robust product.
            </p>
          </div>
        </div> 
                <div className="carousel-item">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
                        <div className="iconcenter" > 
                      <i className="fas fa-handshake fa-4x"></i>  
                      </div>

                      <h4 className="text-center">Our Moto</h4>
                      <p className="text-center">
                        The purpose of a business is to create a customer who
                        creates customers.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
                    <div className="iconcenter" > 
                     <i className="fas fa-shipping-fast fa-4x"></i> </div>
                      <h4 className="text-center">Reach Out Anytime</h4>
                      <p>
                        We provide both online and telephonic assistance.Thanks
                        to our dedicated support, we have 99% customer retention
                        and 100% satisfaction. Our account managers and
                        competent support team promptly respond to requests and
                        make sure your work never stops.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#aboutsld" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a href="#aboutsld" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>
               </div></div> 
     );

};
export default Abo;