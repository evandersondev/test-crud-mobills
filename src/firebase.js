import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAfXmvNXB8TOccC5GuaQ0OpFoPOp38CKVw",
  authDomain: "control-of-expenses.firebaseapp.com",
  databaseURL: "https://control-of-expenses.firebaseio.com",
  projectId: "control-of-expenses",
  storageBucket: "control-of-expenses.appspot.com",
  messagingSenderId: "868268168166",
  appId: "1:868268168166:web:daa63cff1a78178c0cbc27",
  measurementId: "G-FKY5H6WDNB"
};

firebase.initializeApp(config);
firebase.analytics();
export const db = firebase.firestore();
