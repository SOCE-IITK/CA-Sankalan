import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const JoinButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const WhatsAppJoin = () => {
  const whatsAppLink = "https://chat.whatsapp.com/KxM22lAYePqKmuVFqYH2Lc";

  return (
    <div>
      <JoinButton
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join WhatsApp Group"
      >
        <FaWhatsapp size={20} />
        Join WhatsApp Group
      </JoinButton>
    </div>
  );
};

export default WhatsAppJoin;
