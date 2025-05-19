import React, { useEffect, useState } from 'react';
import api from '../api';
import styled from 'styled-components';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setProfile(response.data);
    })
    .catch(error => {
      console.error('Error fetching profile:', error);
    });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <Header>
        <Avatar src={profile.avatar} alt="Avatar" />
        <Name>{profile.name}'s Profile</Name>
        <Bio>{profile.bio || 'No bio available'}</Bio>
      </Header>
      <InfoSection>
        <InfoLabel>Email</InfoLabel>
        <InfoText>{profile.email}</InfoText>
      </InfoSection>
    </ProfileContainer>
  );
};

export default ProfilePage;

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 10px 0;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  max-width: 600px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
`;

const InfoSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
`;