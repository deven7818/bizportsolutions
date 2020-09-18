import  React, { Component } from 'react';
import './features.style.css';

class about extends Component {
  
    render() {
      return (
        <React.Fragment>
          <div className="row rowsetFeature">
            <section className=" text-center">
              <h1>FEATURES</h1>

              <div className="row rowsettinFtr">
                <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
                  <div className=" imgset d-block m-auto bg-warning">
                    <i className="fa fa-file-text-o fa-3x text-white"></i>
                  </div>
                  <h2>Billing</h2>
                  <p>
                    Sales, Multiple Payment mode, Sales Return, Sales Order,
                    Delivery Challan, Home Delivery, Estimate,Balance
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
                  <div className=" imgset d-block m-auto bg-warning">
                    <i className="fa fa-shopping-bag fa-3x text-white"></i>
                  </div>
                  <h2>Inventory</h2>
                  <p>
                    Purchase, Purchase Return, Stock Analysis, Stock Counting
                    and adjustment etc.
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
                  <div className=" imgset d-block m-auto bg-warning">
                    <i className="fa fa-barcode fa-3x text-white"></i>
                  </div>
                  <h2>Barcoding</h2>
                  <p>
                    Cash and Check Payment, Supplier Outstanding, Suplier
                    Ledger, Purchasewise Sale, Payment Due etc.
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
                  <div className=" imgset d-block m-auto bg-warning">
                    <i className="fa fa-calculator fa-3x text-white"></i>
                  </div>
                  <h2>Accounting</h2>
                  <p>
                    Balance Sheet, Profit and Loss Account, Voucher and Joural
                    Entry, General Ledger etc.
                  </p>
                </div>
              </div>
            </section>
          </div>
          </React.Fragment>
      );
    }
}

export default about;