import React from "react";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  const particlesInit = (main) => {
    main.particles.addEmitter({
      autoPlay: true,
      lifeSpan: {
        value: 10,
      },
      rate: {
        quantity: 4,
        delay: 0.1,
      },
      position: {
        x: 50,
        y: 50,
      },
      size: {
        width: 100,
        height: 100,
      },
    });

    // Access the options object and modify the particles shape
    const options = main.particles.options;
    options.particles.shape = {
      type: "star",
      options: {
        sides: 5,
      },
    };

    main.particles.refresh();
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <header className="header flex flex-center flex-column">
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
          <a
            href="/glogin"
            className="btn header-btn btn-blue"
            style={{ zIndex: 3 }}
          >
            <FaPaperPlane /> <span>Register Here</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
