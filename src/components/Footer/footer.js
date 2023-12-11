import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "./socelogo.png";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="footer_component"
      style={{ background: `url(${require("../../assets/images/1.png")})` }}
    >
      <footer
        style={{ background: `url(${require("../../assets/images/1.png")})` }}
      >
        <div className="container grid grid-two-column">
          {/* <motion.div
            className="footer-about"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img
              style={{ paddingTop: "5px" }}
              alt="logo"
              className="tk"
              src={logo}
            />
          </motion.div> */}

          <div className="footer-social">
            <div className="footer-social--icons">
              <motion.div
                className="icon"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <a href="https://www.facebook.com/soce.iitk" target="_blank">
                  <FaFacebook size={35} className="icons ifb" />
                </a>
              </motion.div>

              <motion.div
                className="icon"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <a
                  href="https://www.instagram.com/soce.iitk/?hl=en"
                  target="_blank"
                >
                  <FaInstagram size={35} className="icons iinsta" />
                </a>
              </motion.div>
              <motion.div
                className="icon"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9 }}
              >
                <a
                  href="https://www.linkedin.com/company/79725097/admin/feed/posts/"
                  target="_blank"
                >
                  <FaLinkedin size={35} className="icons itwit" />
                </a>
              </motion.div>
              <motion.div
                className="icon"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.1 }}
              >
                <a
                  href="https://www.youtube.com/@societyofcivilengineersiit3172"
                  target="_blank"
                >
                  <FaYoutube size={35} className="icons iyt" />
                </a>
              </motion.div>
            </div>
            <hr />
            <br />
          </div>
          <motion.div
            className="col-md-12 col-sm-6 col-xs-12 "
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p class="footer-p">
              Copyright © 2023-24 All Rights Reserved by{" "}
              <a href="https://soceiitk.org/" id="company">
                SoCE, IIT Kanpur
              </a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
