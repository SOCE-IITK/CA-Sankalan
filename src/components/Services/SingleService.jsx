import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Services.css";

const SingleService = ({ service }) => {
  return (
    <div className="item translate-effect">
      <span className="item-icon" style={{ fill: "brighter-color" }}>
        {service.icon}
      </span>
      <h4
        className="item-title fs-25"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "400",
        }}
      >
        {service.title}
      </h4>
      <p
        className="fs-19 text"
        style={{
          textAlign: "justify",
          color: "whitesmoke",
          fontFamily:
            "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {service.text}
      </p>
    </div>
  );
};

export default SingleService;
