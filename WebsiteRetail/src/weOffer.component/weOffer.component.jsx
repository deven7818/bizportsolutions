import React, { Component } from 'react';
import './weOffer.style.css';

class weOffer extends Component {

    render() {
        return (
          <div className="">
            <div className="row WrowsetWO">
              <section className=" text-center">
                <h1>WHAT WE OFFER</h1>

                <div className="row WrowsettingWO">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-check-square-o fa-3x text-white"></i>
                    </div>
                    <h2>Domain Expertise</h2>
                    <p>
                      10+ years of experience has made us an expert in our
                      domain, helping us serve our clients better.
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-briefcase fa-3x text-white"></i>
                    </div>
                    <h2>Unique Business Solutions</h2>
                    <p>
                      We offer unique range of standard and customisable
                      solutions for all levels and types of businesses.
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-lightbulb-o fa-3x text-white"></i>
                    </div>
                    <h2>Value Creation</h2>
                    <p>
                      We believe in creating value with our solutions, in the
                      lives of our clients and their customers.
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-refresh fa-3x text-white"></i>
                    </div>
                    <h2>Continuous Training</h2>
                    <p>
                      We provide constant training to our clients and their
                      staff till they master the usage of our software.
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-phone-square  fa-3x text-white"></i>
                    </div>
                    <h2>Telephonic & Online Support</h2>
                    <p>
                      We believe in providing flawless support to our clients.
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className=" WimgsetWO d-block m-auto bg-warning">
                      <i className="fa fa-desktop fa-3x text-white"></i>
                    </div>
                    <h2>Implementation Oriented</h2>
                    <p>
                      We focus heavily on implementing the software to help our
                      clients grow as soon as possible.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

export default weOffer;