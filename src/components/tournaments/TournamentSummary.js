import React from 'react';
import moment from 'moment';

const TournamentSummary = ({ tournament }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{tournament.name}</span>
        <p>BuyIn: {tournament.buyIn}</p>
        <p>
          Created by {tournament.creatorFirstName} {tournament.creatorLastName}
        </p>
        <p className="grey-text">
          {moment(tournament.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default TournamentSummary;
