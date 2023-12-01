import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { get, ref, set, serverTimestamp } from "firebase/database";
import { app, database, auth } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { FaGoogle, FaHome } from "react-icons/fa";

const Body = styled.div`
  background-color: #080710;
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  height: 700px;
  width: 100%;
  max-width: 900px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`;

const Heading = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
`;

const Select = styled.select`
  display: block;
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: black;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

const ButtonContainer = styled.div`
  grid-column: span 3;
  text-align: center;
  margin-top: 20px;
`;
const HomeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const FillDetails = ({ handleFormFilled }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    gender: "",
    college: "",
    collegecity: "",
    address: "",
    yos: "",
    insta: "",
    facebook: "",
    linkedin: "",
    twitter_x: "",
    referrer: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = ref(database, "users/" + auth.currentUser.uid);
      const rankingRef = ref(database, "ranking/" + auth.currentUser.uid);

      // Check if the user already has a unique CA ID
      const snapshot = await get(userRef);
      const caId = snapshot.val()?.caId || uuidv4();

      await set(userRef, {
        ...formData,
        caId, // Assign the CA ID to the user
        createdAt: serverTimestamp(),
      });

      // Update ranking in the "ranking" database
      await set(rankingRef, {
        [caId]: {
          rank: 0, // Initialize with 0 rank
          name: formData.name,
          caId,
          points: 0, // Initialize with 0 points
        },
      });

      alert("Details submitted successfully!");
      handleFormFilled();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting details:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Body>
      <HomeButton onClick={navigateToHome}>
        <FaHome size={40} />
      </HomeButton>
      <Form onSubmit={handleSubmit}>
        <Heading>
          <h3>Fill Your Details</h3>
        </Heading>

        <div>
          <Label htmlFor="name">Name*</Label>
          <Input
            type="text"
            placeholder="Your Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email">Email Id*</Label>
          <Input
            type="text"
            placeholder="Email ID"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label htmlFor="phone">Mobile No.*</Label>
          <Input
            type="tel"
            placeholder="Your Phone Number"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Label htmlFor="whatsapp">Whatsapp No.*</Label>
          <Input
            type="tel"
            placeholder="Your Whatsapp Number"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
          <Label htmlFor="gender">Gender*</Label>
          <Select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="name">College Name* </Label>
          <Input
            type="text"
            placeholder="Your College"
            id="college"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <Label htmlFor="college">College City*</Label>
          <Input
            type="text"
            placeholder="Your College City"
            id="collegecity"
            value={formData.collegecity}
            onChange={handleChange}
            required
          />

          <Label htmlFor="phone">Postal Address*</Label>
          <Input
            type="tel"
            placeholder="Postal Address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Label htmlFor="phone">Year of Study*</Label>
          <Input
            type="tel"
            placeholder="Year of Study"
            id="yos"
            value={formData.yos}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="name">Instagram ID </Label>
          <Input
            type="text"
            placeholder="Your Instagram ID "
            id="insta"
            value={formData.insta}
            onChange={handleChange}
          />

          <Label htmlFor="college">Facebook ID</Label>
          <Input
            type="text"
            placeholder="Your Facebook ID"
            id="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />

          <Label htmlFor="phone">Linkedin ID</Label>
          <Input
            type="tel"
            placeholder="Linkedin ID"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />

          <Label htmlFor="phone">Twitter/X ID</Label>
          <Input
            type="tel"
            placeholder="Twitter/X ID"
            id="twitter_x"
            value={formData.twitter_x}
            onChange={handleChange}
          />
          <Label htmlFor="whatsapp">Referrer CA ID</Label>
          <Input
            type="tel"
            placeholder="Your Referrer CA Id"
            id="referrer"
            value={formData.referrer}
            onChange={handleChange}
          />
        </div>

        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </Form>
    </Body>
  );
};

export default FillDetails;
