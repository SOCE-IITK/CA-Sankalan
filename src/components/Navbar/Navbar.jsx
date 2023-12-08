import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import logo from "./sankalan-logo.png";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand fs-26">
              <img
                src={logo} // replace with the actual path to your image
                alt="Sankalan-CA"
                className="logo-image"
              />
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white">
                  <ScrollLink to="about" smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </li>

                <li className="text-white">
                  <ScrollLink to="services" smooth={true} duration={500}>
                    Incentives
                  </ScrollLink>
                </li>
                <li className="text-white">
                  <ScrollLink to="portfolio" smooth={true} duration={500}>
                    Responsibilities
                  </ScrollLink>
                </li>
                <li className="text-white">
                  <ScrollLink
                    to="contact"
                    onClick={scrollToTop}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
              <ul className="navbar-social flex">
                <li className="text-white">
                  <Link
                    to="https://www.instagram.com/soce.iitk/?hl=en"
                    className="flex flex-center"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    to="https://www.facebook.com/soce.iitk"
                    className="flex flex-center"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    to="https://www.linkedin.com/company/79725097/admin/feed/posts/"
                    className="flex flex-center"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
              <div className="navbar-btns">
                <Link
                  to="/glogin"
                  className="btn button1"
                  style={{ background: "black", border: "2px solid white" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <IoMdRocket />
                    <span
                      style={{
                        color: "white",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#5764de")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    >
                      Register Here
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
