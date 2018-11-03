import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyARDJaRddmspPtWTnUG0Io6m7BGBmfguO0',
  authDomain: 'project-base-17fd1.firebaseapp.com',
  databaseURL: 'https://project-base-17fd1.firebaseio.com',
  projectId: 'project-base-17fd1',
  storageBucket: 'project-base-17fd1.appspot.com',
  messagingSenderId: '842696598664'
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
