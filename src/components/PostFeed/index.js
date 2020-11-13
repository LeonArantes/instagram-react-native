import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, WrapperProfileImage, ProfileImage } from './styles';

const PostFeed = ({ dataMyProfile }) => {
  return (
    <Container>
      <Header>
        <WrapperProfileImage>
          <ProfileImage
            thumbnailSource={{ uri: dataMyProfile.profile_pic_url }}
            source={{ uri: dataMyProfile.profile_pic_url_hd }}
          />
        </WrapperProfileImage>
      </Header>
      <Text> Post Feed </Text>
    </Container>
  );
};

export default PostFeed;
