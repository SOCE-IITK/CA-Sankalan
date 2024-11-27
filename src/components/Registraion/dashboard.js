import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { get, ref, getDatabase, onValue } from "firebase/database";
import ProfileContent from "./ProfileContent";
import TasksContent from "./TasksContent";
import LeaderboardContent from "./LeaderboardContent";
import WhatsappContent from "./WhatsappContent";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

// Styled component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #080710;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.h1`
  margin-top: 65px;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Tab = styled.div`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? "#5764de" : "#080710")};
  color: ${({ active }) => (active ? "#080710" : "#ffffff")};
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px 10px 10px;

  &:hover {
    background-color: #5764de;
    color: #080710;
  }
`;

const ContentContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  overflow: auto; /* Enable horizontal scroll *

  @media (max-width: 768px) {
    max-height: 80vh; /* Adjusted max-height for smaller screens */
  }
`;

const LogoutButton = styled.button`
  background-color: #f00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d00;
  }
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userRef = ref(getDatabase(), "users/" + auth.currentUser.uid);

    onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful!");
      navigate("/glogin");
    } catch (error) {
      console.log(error);
      alert("Something went wrong" + error);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileContent userData={userData} />;
      case "tasks":
        return <TasksContent />;
      case "leaderboard":
        return <LeaderboardContent />;
      case "whatsapp":
        return <WhatsappContent />;
      default:
        return null;
    }
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>Sankalan Campus Ambassador</Header>
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt size={40} />
      </LogoutButton>
      <HomeButton onClick={navigateToHome}>
        <FaHome size={40} />
      </HomeButton>
      <TabsContainer>
        <Tab
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </Tab>
        <Tab
          active={activeTab === "tasks"}
          onClick={() => setActiveTab("tasks")}
        >
          Tasks
        </Tab>
        <Tab
          active={activeTab === "leaderboard"}
          onClick={() => setActiveTab("leaderboard")}
        >
          Leaderboard
        </Tab>
        <Tab
          active={activeTab === "whatsapp"}
          onClick={() => setActiveTab("whatsapp")}
        >
          WhatsApp
        </Tab>
      </TabsContainer>
      <ContentContainer>{renderTabContent()}</ContentContainer>
    </Container>
  );
};

export default Dashboard;
