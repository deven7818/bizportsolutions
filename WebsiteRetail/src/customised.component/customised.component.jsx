import  React, { Component } from 'react';
import './customised.style.css';

class customised extends Component {
  
    render() {
      return (
        <React.Fragment>
          <section className=" Ccust text-center">
              <h1>CUSTOMIZED DEVELOPMENT</h1>
          </section>

            <section className=" text-center">
                <div className="bgCustImg"></div>
                <div className= "custInfo">
                    <h4>WHAT IS CUSTOMIZED DEVELOPMENT ?</h4>
                    <p>Customized software development is the designing of software applications for a specific user or group of users within an organization.
                        Such software is designed to address their needs precisely as opposed to the more traditional and widespread off-the-shelf software.
                    </p>

                    <p>The benefit to custom software is the simple fact it provides features off-the-shelf software doesn’t.
                        Designing an application with your organization’s needs in consideration implies an increased level of productivity.
                        If you have a software application designed to increase productivity or address an internal need, the cost of it is offset by the promise of increased efficiency.</p>

                </div>    
            </section>
        </React.Fragment>

      );
    }
}

export default customised;