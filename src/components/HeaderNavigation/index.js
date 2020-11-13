import React from 'react';
import { Container, TouchButton } from './styles';
import IconCamera from '../../assets/Icons/camera.svg';
import IconMessage from '../../assets/Icons/message.svg';
import InstagramLogo from '../../assets/instagramLogo.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const HeaderNavigation = () => {
  return (
    <Container statusHeight={getStatusBarHeight()}>
      <TouchButton>
        <IconCamera stroke={'#FFFFFF'} />
      </TouchButton>
      <InstagramLogo fill={'#FFFFFF'} />
      <TouchButton>
        <IconMessage stroke={'#FFFFFF'} />
      </TouchButton>
    </Container>
  );
};

export default HeaderNavigation;
