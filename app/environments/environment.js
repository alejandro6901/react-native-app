import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVhX3DwgjQXHvRak1bQ50-xLRvjBZBOhM",
  authDomain: "trip-advisor-23b3c.firebaseapp.com",
  databaseURL: "https://trip-advisor-23b3c.firebaseio.com",
  projectId: "trip-advisor-23b3c",
  storageBucket: "trip-advisor-23b3c.appspot.com",
  messagingSenderId: "837831703106",
  appId: "1:837831703106:web:a84f5ad1f825d441b58bdb",
  measurementId: "G-MV4QB6YBQN",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
