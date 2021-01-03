import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime databas
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const app = firebase.initializeApp({
  apiKey: "AIzaSyDIZeF6V_HpxqSea3e16CGIzMyQTzwsjVw",
  authDomain: "servicejeans-b3b9f.firebaseapp.com",
  projectId: "servicejeans-b3b9f",
  storageBucket: "servicejeans-b3b9f.appspot.com",
  messagingSenderId: "249034484577",
  appId: "1:249034484577:web:a5801a6638db8e5e51b320",
  measurementId: "G-4R6YHLGMTS",
});

export const getFirebase = () => {
  return app;
};

//Para llamar a la base de datos
export const getFirestore = () => {
  return firebase.firestore();
};
