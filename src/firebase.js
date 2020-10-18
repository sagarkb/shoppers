import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOeabqlfsFx8N8hqIvoWT_OpvHLjRMciY",
  authDomain: "shoppers-sagar.firebaseapp.com",
  databaseURL: "https://shoppers-sagar.firebaseio.com",
  projectId: "shoppers-sagar",
  storageBucket: "shoppers-sagar.appspot.com",
  messagingSenderId: "136776883767",
  appId: "1:136776883767:web:ec336aed4db16c51a0e9b2",
  measurementId: "G-VEZR9KXCQX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
