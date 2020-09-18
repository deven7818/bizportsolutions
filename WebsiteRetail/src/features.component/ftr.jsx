import React, { Component } from 'react'

import './ftr.style.css';

class ftr extends Component {
    render() {
        return (
          <React.Fragment>
            <div className=" card-image text-center text-bold p-3">
              <h1>FEATURES</h1>
            </div>
           
            <div className="row aa">
              <div className="col-md-3 col-lg-3 col-xs-12 ">
                <div className="card card-image ">
                  <div className="card-body">
                    <div className=" fimgset d-block m-auto bg-warning">
                      <i className="fa fa-file-text-o fa-3x text-white"></i>
                    </div>
                    <h5 className="card-title p-1">Billing</h5><br/>
                    <p className="card-text">
                      Sales, Multiple Payment mode, Sales Return, Sales Order,
                      Delivery Challan, Home Delivery, Estimate,Balance
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xs-12 mx-auto">
                <div className="card card-image mx-auto ">
                  <div className="card-body">
                    <div className=" fimgset d-block m-auto bg-warning">
                      <i className="fa fa-shopping-bag fa-3x text-white"></i>
                    </div>
                    <h5 className="card-title  p-3">Inventory</h5><br/>

                    <p className="card-text">
                      Purchase, Purchase Return, Stock Analysis, Stock Counting
                      and adjustment etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-lg-3 col-xs-12  mx-auto">
                <div className="card card-image mx-auto">
                  <div className="card-body">
                    <div className=" fimgset d-block m-auto bg-warning">
                      <i className="fa fa-barcode fa-3x text-white"></i>
                    </div>
                    <h5 className="card-title p-1">Barcoding</h5><br/>

                    <p className="card-text">
                      Cash and Check Payment, Supplier Outstanding, Suplier
                      Ledger, Purchasewise Sale, Payment Due etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-lg-3 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <div className=" fimgset d-block m-auto bg-warning">
                      <i className="fa fa-calculator fa-3x text-white"></i>
                    </div>
                    <h5 className="card-title p-2">Accounting</h5><br/>

                    <p className="card-text">
                      Balance Sheet, Profit and Loss Account, Voucher and Joural
                      Entry, General Ledger etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default ftr;
