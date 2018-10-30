import authReducer from './authReducer';
import projectReducer from './projectReducer';
import tournamentReducer from './tournamentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  tournament: tournamentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
