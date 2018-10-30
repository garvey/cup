import React, { Component } from 'react';
import Fans from '../../img/fans.svg';

export default class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row welcome">
          <div className="col s12 m6 valign-wrapper">
            <h2 className="text-center">
              Knockout head to head football prediction game
            </h2>
          </div>
          <div className="col s12 m6 valign-wrapper">
            <img
              className="responsive-img"
              alt="fans celebrating on a couch"
              src={Fans}
            />
          </div>
        </div>
      </div>
    );
  }
}
