import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { Container } from 'reactstrap';

const ProfileDetails = props => {
  const { auth, profile } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  console.log(props);

  if (auth) {
    return (
      <Container>
        <h1>
          {profile.firstName} {profile.lastName}
        </h1>
      </Container>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading profile...</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'tournaments'
    }
  ])
)(ProfileDetails);
