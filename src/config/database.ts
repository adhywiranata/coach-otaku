import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBl61vcLyrL7f2P2hgA5hnv9S4ayv7RX4k',
  authDomain: 'couchotaku-3d4f5.firebaseapp.com',
  databaseURL: 'https://couchotaku-3d4f5.firebaseio.com',
  projectId: 'couchotaku-3d4f5',
  storageBucket: 'couchotaku-3d4f5.appspot.com',
  messagingSenderId: '158718253023'
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;
