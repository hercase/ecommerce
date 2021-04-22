import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXZGZ_jvY8Z2F0wtdo_bZI2MjFbMfAMBQ",
  authDomain: "ecommerce-coder-288f4.firebaseapp.com",
  projectId: "ecommerce-coder-288f4",
  storageBucket: "ecommerce-coder-288f4.appspot.com",
  messagingSenderId: "1087227621000",
  appId: "1:1087227621000:web:5aefbbb353cc7092a7393d",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
