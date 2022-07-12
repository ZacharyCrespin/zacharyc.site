import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);