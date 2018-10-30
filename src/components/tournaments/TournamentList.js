import React from 'react';
import TournamentSummary from './TournamentSummary';
import { Link } from 'react-router-dom';

const TournamentList = ({ tournaments }) => {
  console.log('LIST', tournaments);
  return (
    <div className="project-list section">
      {tournaments &&
        tournaments.map(tournament => {
          return (
            <Link to={'/tournament/' + tournament.id} key={tournament.id}>
              <TournamentSummary tournament={tournament} />
            </Link>
          );
        })}
    </div>
  );
};

export default TournamentList;
