// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbPH9I14lqEtJLmfB-ekYQ5_AcRhYpStw",
  authDomain: "netflixgpt-22b38.firebaseapp.com",
  projectId: "netflixgpt-22b38",
  storageBucket: "netflixgpt-22b38.appspot.com",
  messagingSenderId: "543622883342",
  appId: "1:543622883342:web:50b6e913f781c8de2af45f",
  measurementId: "G-WGFBHHXQTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);