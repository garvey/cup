import React, { Component } from 'react';
import Create from '../../img/create.svg';
import Invite from '../../img/invite.svg';
import Goalkeeper from '../../img/goalkeeper.svg';
import Glory from '../../img/glory.svg';

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row how-it-works">
          <div className="row">
            <div className="col m6">
              <div className="section center-align">
                <h3>Create a Competition</h3>
                <p>Easily setup a CupMarch knockout competition</p>
              </div>
            </div>
            <div className="col m6 create-competition">
              <img
                className="responsive-img"
                src={Create}
                alt="Create compition"
              />
            </div>
          </div>

          <div className="row">
            <div className="col m6 invite">
              <img
                className="responsive-img"
                src={Invite}
                alt="Invite your friends"
              />
            </div>
            <div className="col m6">
              <div className="section center-align">
                <h3>Invite your friends</h3>
                <p>
                  Use email or social media to invite others to join your
                  competition
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col m6">
              <div className="section center-align">
                <h3>Predict weekly football fixtures</h3>
                <p>Go head to head to see who advances to the next round</p>
              </div>
            </div>

            <div className="col m6 predict-fixtures">
              <img
                className="responsive-img"
                src={Goalkeeper}
                alt="goalkeeper"
              />
            </div>
          </div>

          <div className="row">
            <div className="col m6 celebrate">
              <img className="responsive-img" src={Glory} alt="celebration" />
            </div>
            <div className="col m6">
              <div className="section center-align">
                <h3>Celebrate</h3>
                <p>The last player standing wins!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
