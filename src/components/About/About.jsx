import React from "react";
import "./About.css";
import images from "../../constants/images";
import logo from "./sankalan-logo.png";

const About = () => {
  return (
    <section className="about section-p" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={logo} style={{ background: "black" }} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "1.2",
                  background: "black",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Us
              </h3>
            </div>
            <p
              className="text"
              style={{ textAlign: "justify", color: "black" }}
            >
              The Civil Engineering Conclave Sankalan, organized by the Society
              of Civil Engineering, is a vibrant two-day event designed to
              assemble a diverse range of opportunities for knowledge exchange
              and immersive experiences. Attendees will have the chance to
              participate in interactive workshops to delve into the latest
              civil engineering methodologies. Moreover, there will be panel
              discussions and talks featuring renowned figures from both
              national and international realms, sharing insights about the
              pivotal role of civil engineering in addressing global challenges.
              The conclave also encompasses competitions, a technology
              exhibition area showcasing cutting-edge innovations, and a grand
              closing ceremony. Cultural evenings and networking dinners will
              enable participants to not only enjoy the diverse cultural
              heritage of India but also foster valuable connections within the
              industry. This conclave is poised to become a central hub for
              innovation and collaboration in the realm of civil engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
