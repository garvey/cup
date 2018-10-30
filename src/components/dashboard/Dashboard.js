import React, { Component } from 'react';
import Footer from '../layout/Footer';
import TournamentList from '../tournaments/TournamentList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { auth, tournaments } = this.props;
    console.log('PROPS', this.props);

    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <div className="dashboard">
          <div className="row">
            {/* <div className="col m3 sidebar-container">
            <div className="sidebar">sidebar content</div>
          </div> */}
            <div className="col m12">
              <TournamentList tournaments={tournaments} />
            </div>

            {/* <div className="col s12 m5 offset-m1">
            <Notifications />
          </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    tournaments: state.firestore.ordered.tournaments,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tournaments' }])
)(Dashboard);
