import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALPHkBWqrIV-LHaesTSPH3QRhZnn69r80",
  authDomain: "groupfinder-ec397.firebaseapp.com",
  projectId: "groupfinder-ec397",
  storageBucket: "groupfinder-ec397.appspot.com",
  messagingSenderId: "1035903508310",
  appId: "1:1035903508310:web:ed4b19cc0de5372052c0f7",
  measurementId: "G-116KBEN2H6",
}



let Firebase;

if (!firebase.apps.length) {
  Firebase = firebase.initializeApp(firebaseConfig);
} else {
  Firebase = firebase.app(); 
}

export const db = Firebase.firestore();
export const auth = firebase.firestore;
