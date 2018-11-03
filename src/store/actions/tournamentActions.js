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
  return (dispatch, getState, { getFirestore }) => {
    const email = getState().firebase.auth.email;
    const firestore = getFirestore();

    firestore
      .collection('tournaments')
      .doc(id)
      .update({
        member: firestore.FieldValue.arrayUnion(email)
      })
      .then(() => {
        dispatch({
          type: 'ADD_MEMBER'
        });
        console.log('MEMBER ADDED');
      })
      .catch(err => {
        dispatch({ type: 'ADD_MEMBER_ERROR', err });
        console.log('MEMBER NOT ADDED');
      });
  };
};
