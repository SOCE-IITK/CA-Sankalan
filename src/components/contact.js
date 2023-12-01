import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaLinkedin,
} from "react-icons/fa";

const Body = styled.div`
  font-family: tahoma;
  background: black;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const OurTeam = styled.div`
  padding: 30px 20px 40px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
  width: 200px;
  margin: 0 auto;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const Picture = styled.div`
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s;
  }

  ${OurTeam}:hover &::before {
    height: 100%;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }

  ${OurTeam}:hover img {
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
  }
`;

const Title = styled.div`
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
`;

const Social = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: -100%;
  left: 0;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;

  ${OurTeam}:hover & {
    bottom: 0;
  }
`;

const SocialLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin: 0 5px;
`;

const FaIcon = styled.div`
  margin-right: 4px;
`;

const Contact = () => {
  return (
    <Body>
      <Heading>CONTACT US</Heading>
      <TeamContainer>
        {[1, 2, 3].map((index) => (
          <OurTeam key={index}>
            <Picture>
              <img
                className="img-fluid"
                src={`https://picsum.photos/130/130?image=${1027 + index}`}
                alt={`Team Member ${index}`}
              />
            </Picture>
            <Title>Michele Miller</Title>
            <Title>Web Developer</Title>
            <Social>
              <li>
                <SocialLink
                  href="https://codepen.io/collection/XdWJOQ/"
                  aria-hidden="true"
                >
                  <FaIcon>
                    <FaFacebook />
                  </FaIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  href="https://codepen.io/collection/XdWJOQ/"
                  aria-hidden="true"
                >
                  <FaIcon>
                    <FaTwitter />
                  </FaIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  href="https://codepen.io/collection/XdWJOQ/"
                  aria-hidden="true"
                >
                  <FaIcon>
                    <FaGooglePlus />
                  </FaIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  href="https://codepen.io/collection/XdWJOQ/"
                  aria-hidden="true"
                >
                  <FaIcon>
                    <FaLinkedin />
                  </FaIcon>
                </SocialLink>
              </li>
            </Social>
          </OurTeam>
        ))}
      </TeamContainer>
    </Body>
  );
};

export default Contact;
