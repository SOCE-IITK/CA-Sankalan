import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="footer_component"
      style={{
        backgroundImage: `url(${require("../../assets/images/3.png")})`,
        backgroundSize: "cover", // Make background image cover the container
        backgroundPosition: "center", // Center the background image
        height: "90vh",
        zIndex: "1",
      }}
    >
      <footer
        style={{
          backgroundImage: `url(${require("../../assets/images/3.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          zIndex: "1",
        }}
      >
        <hr
          style={{
            marginTop: "0.01%",
            marginBottom: "10px",
            border: "2px solid white", // Adjust the thickness by changing the pixel value
            width: "60%",
          }}
        />

        <div className="container grid grid-two-column">
          <div className="footer-social" style={{ marginBottom: "30px" }}>
            <div className="footer-social--icons">
              <div className="icon">
                <a href="https://www.facebook.com/soce.iitk" target="_blank">
                  <FaFacebook size={70} className="icons ifb" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://www.instagram.com/soce.iitk/?hl=en"
                  target="_blank"
                >
                  <FaInstagram size={70} className="icons iinsta" />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.linkedin.com/company/79725097/admin/feed/posts/"
                  target="_blank"
                >
                  <FaLinkedin size={70} className="icons itwit" />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.youtube.com/@societyofcivilengineersiit3172"
                  target="_blank"
                >
                  <FaYoutube size={70} className="icons iyt" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copyright-box">
            <p className="footer-p">
              Copyright © 2023-24 All Rights Reserved by{" "}
              <a href="https://soceiitk.org/" id="company">
                SoCE, IIT Kanpur
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
