import React from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Header,
  WrapperHeaderItems,
  WrapperProfileImage,
  ProfileImage,
  ProfileName,
  ImagePost,
  FooterButtons,
  Button,
} from './styles';

import IconMessage from '../../assets/Icons/message.svg';
import IconHeart from '../../assets/Icons/heart.svg';
import IconShare from '../../assets/Icons/share.svg';

const PostFeed = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Header>
        <WrapperHeaderItems>
          <WrapperProfileImage>
            <ProfileImage
              thumbnailSource={{ uri: data.avatar_thumbnail }}
              source={{ uri: data.avatar_source }}
            />
          </WrapperProfileImage>
          <ProfileName> {data.username} </ProfileName>
        </WrapperHeaderItems>
      </Header>

      <ImagePost
        thumbnailSource={{ uri: data.post_thumbnail }}
        source={{ uri: data.post_source }}
      />

      <FooterButtons>
        <Button>
          <IconHeart width={18} stroke={'#FFFFFF'} />
        </Button>
        <Button>
          <IconMessage width={18} style={{ transform: [{ rotate: '90deg' }] }} stroke={'#FFFFFF'} />
        </Button>
        <Button>
          <IconShare width={18} stroke={'#FFFFFF'} />
        </Button>
      </FooterButtons>
    </Container>
  );
};

export default PostFeed;
