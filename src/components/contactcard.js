import React from "react";
import styled from "styled-components";

import { FaEnvelope, FaPhone } from "react-icons/fa";

const ProfileImage = styled.div`
  background-image: url(https://static.dw.com/image/54959312_101.jpg);
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.red600};
`;

const CardContainer = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  width: 48px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const CardText = styled.div`
  text-align: center;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const ContactName = styled.h2`
  font-size: 2xl;
  font-weight: bold;
  padding: 2px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const ContactEmail = styled.h1`
  font-weight: lighter;
  font-size: xs;
  padding: 2px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const ContactMobile = styled.h1`
  font-weight: lighter;
  font-size: xs;
  padding: 2px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactIcon = styled.img`
  width: 8px;
  height: 8px;
  padding: 2px;
`;

const CardBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.red600};
  border-radius: 5px;
`;

export default function ContactCard() {
  return (
    <CardContainer>
      <ProfileImage>
        <div className="bg-green-500 w-4 h-4 rounded-full absolute bottom-1 right-0"></div>
      </ProfileImage>
      <CardText>
        <ContactName>Jimmy Hendrix</ContactName>
        <ContactEmail>jimihendrix@abc.com</ContactEmail>
        <ContactMobile>9998899889</ContactMobile>
      </CardText>
      <CardFooter>
        <FaPhone />
        <FaEnvelope />
      </CardFooter>
      <CardBorder />
    </CardContainer>
  );
}
