import React from "react";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";
import { Particles } from "react-tsparticles";
import StarfieldAnimation from "react-starfield-animation"; // Import the StarfieldAnimation component

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
      <StarfieldAnimation
        style={{
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
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
