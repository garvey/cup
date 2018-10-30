export const createTournament = tournament => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const creatorId = getState().firebase.auth.uid;

    firestore
      .collection('tournaments')
      .add({
        ...tournament,
        creatorFirstName: profile.firstName,
        creatorLastName: profile.lastName,
        creatorId: creatorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: 'CREATE_TOURNAMENT',
          tournament
        });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_TOURNAMENT_ERROR', err });
      });
  };
};

export const addMember = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const email = getState().firebase.auth.email;
    const firestore = getFirestore();
    const firebase = getState().firebase;
    const state = getState();
    //const rootRef = firestone.database().ref();
    console.log('FIRESTORE', firestore);
    console.log('FIREBASE', firebase);
    console.log('state', state);
    // tournaments: state.firestore.ordered.tournaments,
    console.log('ID', id);

    firestore
      .collection('tournaments')
      .doc(id)
      .update({
        member: firestore.FieldValue.arrayUnion(email)
      });
  };
};
