import React, { createContext, useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

firebase.initializeApp(firebaseConfig);

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export function useFirebase() {
  return useContext(FirebaseContext);
}

export default firebase;
