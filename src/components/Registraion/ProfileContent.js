import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaUniversity,
  FaCity,
  FaHome,
  FaGraduationCap,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaVenusMars,
  FaIdBadge,
} from "react-icons/fa";

const UnderlinedHeading = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #4a90e2;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const ProfileItem = styled.p`
  font-size: 16px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Comic Sans MS", cursive, sans-serif;

  & strong {
    color: #2b5876;
    flex: 0 0 150px;
  }
`;

const NoDataMessage = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #ff6f61;
  font-size: 18px;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const iconStyle = {
  color: "#4a90e2",
  flexShrink: 0,
};

const ProfileContent = ({ userData }) => {
  const caId = userData?.caId || uuidv4();

  return (
    <div>
      <UnderlinedHeading> Profile Details </UnderlinedHeading>
      {userData ? (
        <>
          <ProfileItem>
            <FaUser style={iconStyle} />
            <strong>Name:</strong> {userData.name}
          </ProfileItem>
          <ProfileItem>
            <FaEnvelope style={iconStyle} />
            <strong>Email:</strong> {userData.email}
          </ProfileItem>
          <ProfileItem>
            <FaPhone style={iconStyle} />
            <strong>Phone:</strong> {userData.phone}
          </ProfileItem>
          <ProfileItem>
            <FaWhatsapp style={iconStyle} />
            <strong>WhatsApp:</strong> {userData.whatsapp}
          </ProfileItem>
          <ProfileItem>
            <FaVenusMars style={iconStyle} />
            <strong>Gender:</strong> {userData.gender}
          </ProfileItem>
          <ProfileItem>
            <FaUniversity style={iconStyle} />
            <strong>College:</strong> {userData.college}
          </ProfileItem>
          <ProfileItem>
            <FaCity style={iconStyle} />
            <strong>College City:</strong> {userData.collegecity}
          </ProfileItem>
          <ProfileItem>
            <FaHome style={iconStyle} />
            <strong>Address:</strong> {userData.address}
          </ProfileItem>
          <ProfileItem>
            <FaGraduationCap style={iconStyle} />
            <strong>Year of Study:</strong> {userData.yos}
          </ProfileItem>
          <ProfileItem>
            <FaInstagram style={iconStyle} />
            <strong>Instagram ID:</strong> {userData.insta || "Not provided"}
          </ProfileItem>
          <ProfileItem>
            <FaFacebook style={iconStyle} />
            <strong>Facebook ID:</strong> {userData.facebook || "Not provided"}
          </ProfileItem>
          <ProfileItem>
            <FaLinkedin style={iconStyle} />
            <strong>LinkedIn ID:</strong> {userData.linkedin || "Not provided"}
          </ProfileItem>
          <ProfileItem>
            <FaTwitter style={iconStyle} />
            <strong>Twitter/X ID:</strong>{" "}
            {userData.twitter_x || "Not provided"}
          </ProfileItem>
          <ProfileItem>
            <FaIdBadge style={iconStyle} />
            <strong>Your CA ID:</strong> {caId}
          </ProfileItem>
          <ProfileItem>
            <FaIdBadge style={iconStyle} />
            <strong>Referrer CA ID:</strong>{" "}
            {userData.referrer || "Not provided"}
          </ProfileItem>
        </>
      ) : (
        <NoDataMessage>No user data available. 😞</NoDataMessage>
      )}
    </div>
  );
};

export default ProfileContent;
