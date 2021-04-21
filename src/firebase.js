import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAauvofa2y6zHS4wxoL5wOT1MErPT4q88k",
  authDomain: "todo-app-demo-e747f.firebaseapp.com",
  databaseURL: "https://todo-app-demo-e747f.firebaseio.com",
  projectId: "todo-app-demo-e747f",
  storageBucket: "todo-app-demo-e747f.appspot.com",
  messagingSenderId: "411159336036",
  appId: "1:411159336036:web:5ae4e31d456086368b3b71",
  measurementId: "G-8D4NLXCN1V",
});

const db = firebaseApp.firestore();

export default db;
