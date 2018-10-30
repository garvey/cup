import React, { Component } from 'react';
import Welcome from '../website/Welcome';
import HowItWorks from '../website/HowItWorks';
import Faq from '../website/Faq';
import Footer from '../website/Footer';

export default class Website extends Component {
  render() {
    return (
      <div>
        <div className="website">
          <Welcome />
          <HowItWorks />
          <Faq />
        </div>
        <Footer />
      </div>
    );
  }
}
