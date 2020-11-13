import React from 'react';
import { Container, ButtonStorie, CircleStorie, ButtonPlus, BulletStorie } from './styles';
import IconPlus from '../../assets/Icons/plus.svg';

const Stories = ({ dataProfiles, dataMyProfile }) => {
  return (
    <Container>
      {dataMyProfile ? (
        <>
          <ButtonStorie>
            <CircleStorie
              thumbnailSource={{ uri: dataMyProfile.profile_pic_url }}
              source={{ uri: dataMyProfile.profile_pic_url_hd }}
            />
          </ButtonStorie>
          <ButtonPlus>
            <IconPlus stroke={'#ffffff'} />
          </ButtonPlus>
        </>
      ) : (
        <>
          <ButtonStorie>
            <CircleStorie
              thumbnailSource={{ uri: dataProfiles.small }}
              source={{ uri: dataProfiles.tiny }}
            />
          </ButtonStorie>
          <ButtonPlus />
        </>
      )}
    </Container>
  );
};

export default Stories;
