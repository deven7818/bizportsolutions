import React, { Component } from 'react';

import './contpage.style.css';

class contpage extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="contbgclr">
               
              <h2 className="text-center">SO WHAT DO YOU THINK ?</h2>
              <p className="text-center">
                To schedule a demo with us,
                <br /> please leave your contact information and we will get
                back to you.
              </p>

              <div className="btncenter">
                <a href="/Contact" className="btn btn-warning btn-lg" role="button">
                  Contact Us
                </a>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default contpage;
