import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaFdSyB6mI4qxRduHoamZENM09BL43mTw",
    authDomain: "react-integration-9f6ba.firebaseapp.com",
    projectId: "react-integration-9f6ba",
    storageBucket: "react-integration-9f6ba.appspot.com",
    messagingSenderId: "478609156230",
    appId: "1:478609156230:web:791b338afbb572ae1b0907",
    measurementId: "G-NNWMT3ZPP2"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
