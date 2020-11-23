import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSCqIDwAnym82tDvLyBCYRT93vu96tcyg",
    authDomain: "rico-twitter-clone.firebaseapp.com",
    databaseURL: "https://rico-twitter-clone.firebaseio.com",
    projectId: "rico-twitter-clone",
    storageBucket: "rico-twitter-clone.appspot.com",
    messagingSenderId: "4221200664",
    appId: "1:4221200664:web:bf1fff9763aa8d699b166d",
    measurementId: "G-ETX2KNG16K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;