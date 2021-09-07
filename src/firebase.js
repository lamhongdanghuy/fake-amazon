// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnkfPN4S3GMp-XrHk05p69-KLEokA0mVQ",
  authDomain: "fake-860f4.firebaseapp.com",
  projectId: "fake-860f4",
  storageBucket: "fake-860f4.appspot.com",
  messagingSenderId: "216390276536",
  appId: "1:216390276536:web:67862e3c722509884d2b4d",
  measurementId: "G-MM56575D52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
