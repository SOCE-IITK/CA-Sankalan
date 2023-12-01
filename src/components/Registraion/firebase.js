// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDORnlPAfUQQswIDF6dqT5qvktV74TbsPw",
  authDomain: "ca-sankalan.firebaseapp.com",
  projectId: "ca-sankalan",
  storageBucket: "ca-sankalan.appspot.com",
  messagingSenderId: "969987542011",
  appId: "1:969987542011:web:e79008f45cf2132b81195e",
  databaseURL:
    "https://ca-sankalan-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, auth, database, ref, get }; // Remove 'as default'
