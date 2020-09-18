import  React, { Component } from 'react';
import './mobile.style.css';

class customised extends Component {
  
    render() {
      return (
        <React.Fragment>
          <section className=" Mcust text-center">
            <h1>MOBILE APP DEVELOPMENT</h1>
          </section>

          <section className=" text-center">
            <div className="bgMobImg"></div>
            <div className="MobInfo">
              <h2 className="p-4">WHAT IS MOBILE APP DEVELOPMENT ?</h2>

              <p>
                <h8>Mobile Apps </h8>
                are revolutionary changing in the tech world today, as people
                are getting engaged with each other through Mobile phones. An
                organization must have a website and mobile application in order
                to evolve their business. Benefits of Mobile App Development on
                Business Aspects:
              </p>

              <p>
                <h8>1. On-The-Go Marketing-: </h8>
                Mobile Application Offer On-The-Go marketing, customers can
                access your business anywhere and at any time.
              </p>

              <p>
                <h8>2. Increase More Sales-: </h8>
                Business means for generating sales and revenue. Apart from
                sales, Mobile application also assists to enhance brand
                awareness.
              </p>

              <p>
                <h8>3. Future Marketing Trend-: </h8>
                Mobile app will become a marketing trend soon, which means soon
                search engine queries will come from smart devices as opposed to
                a personal computer.
              </p>

              <p>
                <h8>4. Act As Social Platform-: </h8>
                Business becomes social with social networking sites and people
                are gripped with social media. So we must use these platforms as
                business strategies in order to improve the connectivity with
                users.
              </p>
            </div>
          </section>
        </React.Fragment>
      );
    }
}

export default customised;