import React from 'react';
import { Container, ButtonStorie, CircleStorie, ButtonPlus, BulletStorie } from './styles';
import IconPlus from '../../assets/Icons/plus.svg';

const Stories = ({ dataMyProfile, dataProfiles }) => {
  return (
    <Container>
      <ButtonStorie>
        <CircleStorie
          thumbnailSource={{
            uri: dataMyProfile ? dataMyProfile.profile_pic_url : dataProfiles.small,
          }}
          source={{ uri: dataMyProfile ? dataMyProfile.profile_pic_url_hd : dataProfiles.tiny }}
        />
      </ButtonStorie>
      {dataMyProfile ? (
        <ButtonPlus>
          <IconPlus stroke={'#ffffff'} />
        </ButtonPlus>
      ) : (
        <ButtonPlus />
      )}
    </Container>
  );
};

export default Stories;

// thumbnailSource={{ uri: dataMyProfile.profile_pic_url }}
//                   source={{ uri: dataMyProfile.profile_pic_url_hd }}
