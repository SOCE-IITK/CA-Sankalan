// Header.js
import React from "react";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Header = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <header className="header flex flex-center flex-column">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            image: "url('../../assets/images/1.png')", // Set the image URL
            position: "center",
            repeat: "no-repeat",
            size: "cover",
          },
          fpsLimit: 60,
          particles: {
            // ... rest of the particle options
          },
          // ... other options
        }}
      />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="header-title">Campus Ambassador</h1>
          <h3
            style={{
              fontSize: "40px",
              fontWeight: "400",
              lineHeight: "1.2",
              background: "white",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SANKALAN'24
          </h3>
          <p className="text-lead">
            Civil Engineering Conclave-Sankalan by SoCE IIT Kanpur invites
            Campus Ambassadors. Register for this opportunity now!!
          </p>
          <a href="/glogin" className="btn header-btn btn-blue">
            <FaPaperPlane /> <span>Register Here</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
