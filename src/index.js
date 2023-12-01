// RootComponent.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import GLogin from "./components/Registraion/glogin";
import FillDetails from "./components/Registraion/Details";
import Dashboard from "./components/Registraion/dashboard";
import { auth, database, ref, get } from "./components/Registraion/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasFilledDetails, setHasFilledDetails] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);

        // Check if the user has filled out details in the database
        const userRef = ref(database, "users/" + user.uid);
        const userSnapshot = await get(userRef);

        if (userSnapshot.exists()) {
          setHasFilledDetails(true);
        } else {
          setHasFilledDetails(false); // Reset the state if the user hasn't filled details
        }
      } else {
        setIsAuthenticated(false);
        setHasFilledDetails(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/glogin"
          element={<GLogin handleAuthentication={handleAuthentication} />}
        />
        <Route
          path="/details"
          element={
            isAuthenticated ? (
              hasFilledDetails ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <FillDetails
                  handleFormFilled={() => setHasFilledDetails(true)}
                />
              )
            ) : (
              <Navigate to="/glogin" replace />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              hasFilledDetails ? (
                <Dashboard />
              ) : (
                <Navigate to="/details" replace />
              )
            ) : (
              <Navigate to="/glogin" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

root.render(<RootComponent />);
