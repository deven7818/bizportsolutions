import  React, { Component } from 'react';
import './sidenav.style.css';

class about extends Component {
  
    render() {
      return (
        <React.Fragment>
          <div className="sidebar">
            <ul>
                <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
                <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
                <li><a href="#"><i class="fas fa-calender-week"></i>Events</a></li>
                <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
                <li><a href="#"><i class="fas fa-question-sliders-h"></i>Services</a></li>
                <li><a href="#"><i class="far fa-question-envelope"></i>Contacts</a></li>
            </ul>
          </div>
        </React.Fragment>
      );
    }
}

export default about;