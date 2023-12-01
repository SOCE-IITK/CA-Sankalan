// ProfileContent.js

import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const UnderlinedHeading = styled.h2`
  text-decoration: underline;
`;

const ProfileContent = ({ userData }) => {
  const caId = userData?.caId || uuidv4();
  return (
    <div>
      <UnderlinedHeading>Profile Details</UnderlinedHeading>
      {userData && (
        <div>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Whatsapp:</strong> {userData.whatsapp}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p>
            <strong>College:</strong> {userData.college}
          </p>
          <p>
            <strong>College City:</strong> {userData.collegecity}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Year of Study:</strong> {userData.yos}
          </p>
          <p>
            <strong>Instagram ID:</strong> {userData.insta || "Not provided"}
          </p>
          <p>
            <strong>Facebook ID:</strong> {userData.facebook || "Not provided"}
          </p>
          <p>
            <strong>Linkedin ID:</strong> {userData.linkedin || "Not provided"}
          </p>
          <p>
            <strong>Twitter/X ID:</strong>{" "}
            {userData.twitter_x || "Not provided"}
          </p>
          <p>
            <strong>Your CA ID:</strong> {caId}
          </p>
          <p>
            <strong>Referrer CA ID:</strong>{" "}
            {userData.referrer || "Not provided"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
