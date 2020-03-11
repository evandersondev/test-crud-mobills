import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAsZPyFWiqjjA1GRyPb43607MW8TNy_Ekc",
  authDomain: "crud-mobills.firebaseapp.com",
  databaseURL: "https://crud-mobills.firebaseio.com",
  projectId: "crud-mobills",
  storageBucket: "crud-mobills.appspot.com",
  messagingSenderId: "356828338513",
  appId: "1:356828338513:web:f1bef7ac3300e8da6c9b70",
  measurementId: "G-G8Y7TX4PYE"
};

firebase.initializeApp(config);
firebase.analytics();
export const db = firebase.firestore();
