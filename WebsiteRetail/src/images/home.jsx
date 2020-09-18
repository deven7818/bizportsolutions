import React, { Component } from 'react';
import './home.style.css';

import Abo  from '../about.component/abtM';
import WeOffer from '../weOffer.component/weOffer.component';
import Industry from '../IndustryExpertise/industry.component';

class home extends Component {
    render() {
        return (
          <React.Fragment>
            <div id="slideshow" className="carousel slide carousel-fade" data-ride="carousel">
               
                <ol className="carousel-indicators">
                    <li className="active" data-target="#slideshow" data-slide-to="0"></li>
                    <li  data-target="#slideshow" data-slide-to="1"></li>
                    <li  data-target="#slideshow" data-slide-to="2"></li>
                    <li  data-target="#slideshow" data-slide-to="3"></li>
 
                </ol>

              <div className="carousel-inner">

                <div className="carousel-item active himg1">
                  <div className="carousel-caption d-none d-md-block hdcolr">
                  <h4 className="titletxt">Welcome To BizportSolutions</h4>
                    <p className="hometext"> WITH OVER 10 YEARS OF EXPERIENCE, WE ARE ONE OF THE LEADING SOLUTION PROVIDERS
                        FOR RETAIL SOLUTIONS. </p>
                    
                  </div>
                </div>

                <div className="carousel-item himg2">
                  <div className="carousel-caption d-none d-md-block hdcolr">
                    
                  </div>
                </div>

                <div className="carousel-item himg3">
                  <div className="carousel-caption hdcolr d-none d-md-block hdcolr">
                    
                  </div>
                </div>

                <div className="carousel-item himg4">
                  <div className="carousel-caption d-none d-md-block hdcolr">
                    
                  </div>
                </div>

                <a href="#slideshow" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a href="#slideshow" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>


              </div>
            </div>
           <Abo />
          
          <WeOffer/>
          <Industry/>
          </React.Fragment>
        );
    }
}

export default home;
