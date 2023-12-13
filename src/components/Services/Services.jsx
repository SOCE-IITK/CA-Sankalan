import { React, useState, useEffect } from "react";
import "./Services.css";
import sections from "../../constants/data";
import SingleService from "./SingleService";
import slider from "../../assets/images/ca-portal-slide.png";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById("services"); // Replace with the actual ID of the component
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
    <section className="services section-p " id="services">
      <div
        className={`slide-in-image ${isVisible ? "visible" : ""}`}
        style={{ maxHeight: "100px", marginTop: "-100px" }}
      >
        <img
          src={slider}
          alt="Slide"
          style={{ maxHeight: "100px", marginBottom: "-0px" }} // Adjust the maxHeight as needed
        />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="section-t text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {" "}
            Why you should Apply ?
          </h3>
        </div>

        <div className="services-content">
          <svg width="1em" height="1em">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#55b3d5" offset="0%" />
              <stop stopColor="#5764de" offset="100%" />
            </linearGradient>
          </svg>

          <div className="item-list grid text-white text-center">
            {sections.services.map((service) => {
              return <SingleService service={service} key={service.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
