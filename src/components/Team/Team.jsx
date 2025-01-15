import { React, useState, useEffect } from "react";
import "./Team.css";
import {
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa";

import balaji from "./Core-Team/Balaji-Devaraju.jpg";
import partha from "./Core-Team/parthasir.jpeg";
import cksahu from "./Core-Team/cksahu.jpg";
import prabin from "./Core-Team/Prabin-Ashish.jpg";
import shubham from "./Core-Team/shubham.jpeg";
import shrey from "./Core-Team/Finance_lokesh.jpg";
import Pranay from "./Core-Team/Pranay_events.jpg";
import saurabh from "./Core-Team/saurabh.jpg";
import baban from "./Core-Team/baban.jpg";
import aditya from "./Core-Team/aditya.jpg";
import aadya from "./Core-Team/aadya.jpg";
import shambhavi from "./Core-Team/shambhavi.jpg";
import sahil from "./Core-Team/Sahil Arolia.jpg";
import shubhamphd from "./Core-Team/shubhamphd.jpg";
import About from "./../About/About";
import slider from "../../assets/images/ca-portal-slide.png";

export default function Team() {
  const iconSize = 30;
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById("contact"); // Replace with the actual ID of the component
    const scrollPosition = window.scrollY + window.innerHeight;

    if (aboutSection && scrollPosition > aboutSection.offsetTop) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className="contact "
        id="contact"
        style={{
          backgroundColor: "black",
          fontFamily: "'Montserrat', sans-serif",
          paddingTop: "50px", // Adjust padding as needed
          paddingBottom: "50px", // Adjust padding as needed
          backgroundImage: `url(${require("../../assets/images/3.png")})`,
          backgroundSize: "cover", // Make background image cover the container
          backgroundPosition: "center",
        }}
      >
        <div
          className={`slide-in-image ${isVisible ? "visible" : ""}`}
          style={{
            maxHeight: "100px",
            marginTop: "-45px",
            marginBottom: "2px",
          }}
        >
          <img
            src={slider}
            alt="Slide"
            style={{ maxHeight: "100px", marginBottom: "2px" }} // Adjust the maxHeight as needed
          />
        </div>
        <div className="cards" data-aos="fade-up" data-aos-delay="300">
          <h1
            style={{
              fontSize: "50px",
              color: "var(--clr-white)",
              padding: "20px 0",
              lineHeight: "1.2",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Contact Us
          </h1>

          <div className="inner-card">
            <div
              className="card"
              style={{ marginBottom: "20px", minHeight: "350px" }}
            >
              <div className="image">
                <img src={sahil} alt="" />
              </div>
              <div className="text">
                <p className="name">Sahil Arolia </p>

                <p className="no">
                  <i>+91-7389959652</i>
                </p>
              </div>
              <div className="links">
                <a
                  href="mailto:asahil22@iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={iconSize} />
                </a>
                <a
                  href= "https://www.linkedin.com/in/sahil-arolia-1a2bb8259"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={iconSize} />
                </a>
                <a
                  href="https://instagram.com/sahil_arolia?igshid=ZDc4ODBmNjlmNQ== "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={iconSize} />
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ marginBottom: "20px", minHeight: "350px" }}
            >
              <div className="image">
                <img src={shrey} alt="" />
              </div>
              <div className="text">
                <p className="name">Lokesh Sunda</p>

                <p className="no">
                  <i>+91-8741811383</i>
                </p>
              </div>
              <div className="links">
                <a
                  href="mailto:lokeshs22@iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={iconSize} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokesh-sunda-7b0773260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={iconSize} />
                </a>
                <a
                  href="https://www.instagram.com/lokeshkumarsunda?igsh=NG05NzRiMGVubHQ4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={iconSize} />
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ marginBottom: "20px", minHeight: "350px" }}
            >
              <div className="image">
                <img src={Pranay} alt="" />
              </div>
              <div className="text">
                <p className="name">Pranay Saxena</p>

                <p className="no">
                  <i>+91-8769639498</i>
                </p>
              </div>
              <div className="links">
                <a
                  href="mailto:pranays22@iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={iconSize} />
                </a>
                <a
                  href= "https://www.linkedin.com/in/pranay-saxena-0971aa258/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={iconSize} />
                </a>
                <a
                  href="https://www.instagram.com/pranay_s22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={iconSize} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
