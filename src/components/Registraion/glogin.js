import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, database, get } from "./firebase";
import { FaGoogle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, serverTimestamp, set } from "firebase/database";

// Styled components
const Body = styled.div`
  background-color: #080710;
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
`;

const Shape1 = styled(Shape)`
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
`;

const Shape2 = styled(Shape)`
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
`;

const Form = styled.form`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Add spacing between icon and text */
  span {
    margin-left: 8px; /* Adjust the spacing as needed */
  }
`;

const SocialIcon = styled.i`
  margin-right: 4px;
`;

const GLogin = ({ handleAuthentication }) => {
  const navigate = useNavigate();

  // Listen for changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        handleAuthentication(true);

        // Check if the user has filled out details in the database
        const userRef = ref(database, "users/" + user.uid);
        const userSnapshot = await get(userRef);

        if (!userSnapshot.exists()) {
          // User exists but has not filled out the form
          navigate("/details");
        }
      } else {
        handleAuthentication(false);
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [handleAuthentication, navigate]);

  const signInWithProvider = async (provider) => {
    try {
      const credential = await signInWithPopup(auth, provider);
      const userMeta = getAdditionalUserInfo(credential);

      if (userMeta.isNewUser) {
        await set(ref(database, "users/" + credential.user.uid), {
          name: credential.user.displayName,
          avatar: credential.user.photoURL,
          createdAt: serverTimestamp(),
        });
      }

      // Update the local authentication state (if you choose to use local state)
      // setIsAuthenticated(true);

      // Call the provided callback function to update the state in the parent component
      handleAuthentication(true);

      alert("Login successful!");

      // Navigate to the dashboard instead of details
      navigate("/details");
    } catch (error) {
      console.log(error);
      alert("Something went wrong" + error);
    }
  };

  const googleSignIn = () => {
    signInWithProvider(new GoogleAuthProvider());
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Body>
      <Background>
        <Shape1></Shape1>
        <Shape2></Shape2>
      </Background>
      <HomeButton onClick={navigateToHome}>
        <FaHome size={35} />
      </HomeButton>
      <Form>
        <h3>Register Using</h3>
        <Button type="button" onClick={googleSignIn}>
          <FaGoogle />
          <span>Google</span>
        </Button>
      </Form>
    </Body>
  );
};

export default GLogin;
