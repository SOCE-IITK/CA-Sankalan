import React from "react";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">
            Sankalan Campus Ambassador
          </h1>
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
