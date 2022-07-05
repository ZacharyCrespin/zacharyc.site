// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAusVefSFH7pEqWLclTEDyEYFSlpMrzubk",
  authDomain: "zacharycsite.firebaseapp.com",
  databaseURL: "https://zacharycsite-default-rtdb.firebaseio.com",
  projectId: "zacharycsite",
  storageBucket: "zacharycsite.appspot.com",
  messagingSenderId: "18418783539",
  appId: "1:18418783539:web:904df4549700d037dc9a46",
  measurementId: "G-7TQEN9M9FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);
// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);