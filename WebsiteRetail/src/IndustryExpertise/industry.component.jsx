import React, { Component } from 'react';
import './industry.style.css';


class home extends Component {
    render() {
        return (
          <React.Fragment>
              <div className="container-fluid p-3">
              <h1 className="text-center">Our Industry Expertise</h1>
                <div id="Islideshow" className="carousel slide carousel-fade" data-ride="carousel">
               
                <ol className="carousel-indicators">
                    <li className="active" data-target="#Islideshow" data-slide-to="0"></li>
                    <li  data-target="#Islideshow" data-slide-to="1"></li>
                    <li  data-target="#Islideshow" data-slide-to="2"></li>
                    <li  data-target="#Islideshow" data-slide-to="3"></li>
                    <li  data-target="#Islideshow" data-slide-to="4"></li>
                    <li  data-target="#Islideshow" data-slide-to="5"></li>
                    <li  data-target="#Islideshow" data-slide-to="6"></li>
                    <li  data-target="#Islideshow" data-slide-to="7"></li>
                    <li  data-target="#Islideshow" data-slide-to="8"></li>
                    <li  data-target="#Islideshow" data-slide-to="9"></li>
                    <li  data-target="#Islideshow" data-slide-to="10"></li>
                    <li  data-target="#Islideshow" data-slide-to="11"></li>
 
                </ol>

              <div className="carousel-inner">

                <div className="carousel-item active iimg1">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg2">
                  <div className="carousel-caption d-none d-md-block">
                   
                  </div>
                </div>

                <div className="carousel-item iimg3">
                  <div className="carousel-caption d-none d-md-block ">
                   
                  </div>
                </div>

                <div className="carousel-item iimg4">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg5">
                  <div className="carousel-caption d-none d-md-block ">
                  </div>
                </div>

                <div className="carousel-item iimg6">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg7">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg8">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg9">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg10">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg11">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <div className="carousel-item iimg12">
                  <div className="carousel-caption d-none d-md-block ">
                    
                  </div>
                </div>

                <a href="#Islideshow" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a href="#Islideshow" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>


              </div>
            </div>
            </div>
          </React.Fragment>
        );
    }
}

export default home;
