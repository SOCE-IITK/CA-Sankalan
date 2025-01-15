import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Header.css"; // Make sure this path is correct

const Header = () => {
  return (
    <header className="header flex flex-center flex-column modern-header">
      <div className="container">
        <div className="header-content text-center flex flex-column modern-content">
          <h1 className="header-title modern-title">Campus Ambassador</h1>
          <h3 className="header-subtitle">SANKALAN'25</h3>
          <p className="text-lead modern-text">
            Civil Engineering Conclave-Sankalan by SoCE IIT Kanpur invites
            Campus Ambassadors. Register for this opportunity now!
          </p>
          <a
            href="/glogin"
            className="btn header-btn modern-btn"
          >
            <FaPaperPlane /> <span>Register Here</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
