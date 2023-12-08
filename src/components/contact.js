import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div
      style={{
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        margin: "0 auto",
        width: "48px",
        height: "52px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        color: "#777",
      }}
    >
      <div
        style={{
          backgroundImage: `url(https://static.dw.com/image/54959312_101.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: "-8px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid red",
        }}
      ></div>
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        <h2 style={{ fontSize: "2xl", fontWeight: "bold", padding: "2px" }}>
          Jimmy Hendrix
        </h2>
        <h5 style={{ fontSize: "xs", padding: "2px" }}>jimihendrix@abc.com</h5>
        <h5 style={{ fontSize: "xs", padding: "2px" }}>9998899889</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FaPhone style={{ padding: "2px" }} />
        <FaEnvelope style={{ padding: "2px" }} />
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "red",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default ContactCard;
