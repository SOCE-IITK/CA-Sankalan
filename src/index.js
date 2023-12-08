import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import GLogin from "./components/Registraion/glogin";
import FillDetails from "./components/Registraion/Details";
import Dashboard from "./components/Registraion/dashboard";
import { onAuthStateChanged } from "firebase/auth";

import { auth, database, ref, get } from "./components/Registraion/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasFilledDetails, setHasFilledDetails] = useState(false);
  const [isCheckingDetails, setIsCheckingDetails] = useState(false); // New state for checking details

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        setIsCheckingDetails(true); // Start checking details

        // Get user details and check if specific required fields are present
        const userRef = ref(database, `users/${user.uid}`);
        const userSnapshot = await get(userRef);

        const hasRequiredDetails =
          userSnapshot.exists() &&
          userSnapshot.val().name && // Check for specific required fields
          userSnapshot.val().email &&
          userSnapshot.val().phone &&
          userSnapshot.val().whatsapp &&
          userSnapshot.val().gender &&
          userSnapshot.val().college &&
          userSnapshot.val().collegecity &&
          userSnapshot.val().address &&
          userSnapshot.val().yos;

        setHasFilledDetails(hasRequiredDetails);
        setIsCheckingDetails(false); // Finish checking details
      } else {
        setIsAuthenticated(false);
        setHasFilledDetails(false);
        setIsCheckingDetails(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async (status) => {
    // Check if user details are filled before updating state
    const userRef = ref(database, `users/${auth.currentUser.uid}`);
    const userSnapshot = await get(userRef);

    if (isAuthenticated && !isCheckingDetails) {
      // Redirect based on details completion
      if (hasFilledDetails) {
        return <Navigate to="/dashboard" replace />;
      } else {
        return <Navigate to="/details" replace />;
      }
    } else if (isCheckingDetails) {
      // Show loading indicator while checking details
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      // User not authenticated
      return <Navigate to="/glogin" replace />;
    }
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
