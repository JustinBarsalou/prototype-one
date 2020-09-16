import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyDxxkxTuBdjsmuisZpwyNVOy2MFwOC1iV0",
    authDomain: "prototype-one-289718.firebaseapp.com",
    databaseURL: "https://prototype-one-289718.firebaseio.com",
    projectId: "prototype-one-289718",
    storageBucket: "prototype-one-289718.appspot.com",
    messagingSenderId: "143174004200",
    appId: "1:143174004200:web:487d9a7f729aed1845c85d",
    measurementId: "G-5S36D0HBTY"
};
const fire = firebase.initializeApp(config);
export default fire;