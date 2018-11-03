import React, { Component } from 'react';
import _ from 'lodash';
import { createFixture } from '../../store/actions/fixtureActions';

class FixtureDetails extends Component {
  render() {
    const { tournament } = this.props;

    function handleSubmit(e) {
      e.preventDefault();
      var members = _.shuffle(tournament.member);
      var fixtures = _.chunk(members, 2);
      //this.props.createFixture(fixtures);
      console.log(fixtures);
    }

    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <h1>Fixtures</h1>
          <div className="row">
            {/* {tournament.member.map(fixture => (
            <div key={fixture} className="col s6">
              {fixture}
            </div>
          ))} */}

            <button
              onClick={handleSubmit}
              className="btn pink lighten-1 z-depth-0 modal-trigger"
            >
              Create fixtures
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FixtureDetails;
