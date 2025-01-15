import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="footer_component"
      style={{
        background: "linear-gradient(135deg,rgb(1, 13, 36),rgb(3, 17, 41))", // Modern gradient background
        color: "white",
        padding: "40px 20px",
      }}
    >
      {/* Decorative Line */}
      <hr
        style={{
          margin: "0 auto 20px",
          border: "1px solid white",
          width: "80%",
          opacity: 0.7,
        }}
      />

      {/* Social Media Section */}
      <div className="footer-social" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "3rem" }}>
          Follow Us
        </h3>
        <div className="footer-social--icons" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://www.facebook.com/soce.iitk" target="_blank" rel="noreferrer">
            <FaFacebook size={50} className="icons ifb" />
          </a>
          <a href="https://www.instagram.com/soce.iitk/?hl=en" target="_blank" rel="noreferrer">
            <FaInstagram size={50} className="icons iinsta" />
          </a>
          <a href="https://www.linkedin.com/company/79725097/admin/feed/posts/" target="_blank" rel="noreferrer">
            <FaLinkedin size={50} className="icons ilinkedin" />
          </a>
          <a href="https://www.youtube.com/@societyofcivilengineersiit3172" target="_blank" rel="noreferrer">
            <FaYoutube size={50} className="icons iyt" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright-box" style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "5px", fontSize: "2rem", opacity: 0.8 }}>
          Copyright © 2023-24 All Rights Reserved by{" "}
          <a
            href="https://soceiitk.org/"
            id="company"
            style={{ textDecoration: "none", color: "#FFD700", fontWeight: "bold" }}
          >
            SoCE, IIT Kanpur
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
