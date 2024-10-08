// Profile.js
import React from "react";
import styled from "styled-components";
import ProfileImg from "@/assets/images/profile.jpg";
import UserForm from "./UserForm";

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  width: 50%

  @media (max-width: 768px){
    max-width: 100%
  }
`;

const ProfileTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Profile = () => {
  return (
    <StyledProfileContainer>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileImage
        src={ProfileImg} // Replace with your profile image URL
        alt="Profile"
      />
      <UserForm />
    </StyledProfileContainer>
  );
};

export default Profile;
