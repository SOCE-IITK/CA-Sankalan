import React from "react";
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
import shrey from "./Core-Team/shrey.jpg";
import sandipan from "./Core-Team/sandipan.jpg";
import saurabh from "./Core-Team/saurabh.jpg";
import baban from "./Core-Team/baban.jpg";
import aditya from "./Core-Team/aditya.jpg";
import aadya from "./Core-Team/aadya.jpg";
import shambhavi from "./Core-Team/shambhavi.jpg";
import vedant from "./Core-Team/vedant.jpg";
import shubhamphd from "./Core-Team/shubhamphd.jpg";

export default function Team() {
  const iconSize = 30;
  return (
    <>
      <section
        className="contact"
        id="contact"
        style={{
          backgroundColor: "black",
          fontFamily: "'Montserrat', sans-serif",
          paddingTop: "50px", // Adjust padding as needed
          paddingBottom: "50px", // Adjust padding as needed
        }}
      >
        <h1
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          CONTACT US
        </h1>

        <div
          className="cards"
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="inner-card">
            <div className="card" style={{ marginBottom: "20px" }}>
              <div className="image">
                <img src={vedant} alt="" />
              </div>
              <div className="text">
                <p className="name">Vedant Adlak </p>

                <p className="no">
                  <i>+91-7000305702</i>
                </p>
              </div>
              <div className="links">
                <a
                  href="mailto:vedanta21@iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={iconSize} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vedant-adlak-4158a8257"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={iconSize} />
                </a>
                <a
                  href="https://instagram.com/vedant_adlak21?igshid=NGExMmI2YTkyZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={iconSize} />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="" alt="" />
              </div>
              <div className="text">
                <p className="name">Vedant Adlak</p>

                <p className="email">
                  <i> +91-7000305702</i>
                </p>
              </div>
              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={iconSize} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={iconSize} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={iconSize} />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="" alt="" />
              </div>
              <div className="text">
                <p className="name">Sandipan Dutta</p>

                <p className="email">
                  <i>+91-7906379797</i>
                </p>
              </div>

              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={iconSize} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={iconSize} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
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
