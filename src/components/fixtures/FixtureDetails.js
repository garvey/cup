import React from 'react';
import moment from 'moment';

const FixtureDetails = ({ tournament }) => {
  var member = tournament.member;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h1>Fixtures</h1>
        <div className="row">
          {member.map(fixture => (
            <div key={fixture} className="col s6">
              {fixture}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FixtureDetails;
