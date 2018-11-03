import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMember } from '../../store/actions/tournamentActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import _ from 'lodash';
import Trophy from '../../img/trophy.svg';
import { Link } from 'react-router-dom';
import FixtureDetails from '../fixtures/FixtureDetails';

class TournamentDetails extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.addMember(id);
    this.props.history.push('/payment');
  };

  render() {
    const { auth, tournament } = this.props;

    if (tournament) {
      const member = tournament.member;
      const memberCheck = _.includes(member, auth.email);

      var buttonText = memberCheck ? (
        <div className="card-panel teal lighten-2">You're a member</div>
      ) : (
        <button
          onClick={this.handleSubmit}
          className="btn pink lighten-1 z-depth-0 modal-trigger"
        >
          Join the tournament
        </button>
      );

      if (tournament.member) {
        var pot_total = tournament.member.length * tournament.buyIn;
      } else {
        var pot_total = 0;
      }

      if (tournament.member) {
        var fixture_list = <FixtureDetails tournament={tournament} />;
      } else {
        var fixture_list = <div>No members!</div>;
      }
    } else {
      console.log('NOT LOADED YET');
    }

    if (!auth.uid) return <Redirect to="/signin" />;

    if (tournament) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <h2>
                <img src={Trophy} alt="Trophy" style={{ height: 60 }} />{' '}
                {tournament.name}
              </h2>
              <p>BuyIn - €{tournament.buyIn}</p>
              <p>Pot size - €{pot_total}</p>
              <p>start date - {tournament.startDate} </p>
              <p>list of members - {tournament.member}</p>
              {buttonText}

              {fixture_list}
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Created by {tournament.creatorFirstName}{' '}
                {tournament.creatorLastName}
              </div>
              <div>
                Created {moment(tournament.createdAt.toDate()).calendar()}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading tournament...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tournaments = state.firestore.data.tournaments;
  const tournament = tournaments ? tournaments[id] : null;
  return {
    tournament: tournament,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMember: tournament => dispatch(addMember(tournament))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: 'tournaments'
    }
  ])
)(TournamentDetails);
