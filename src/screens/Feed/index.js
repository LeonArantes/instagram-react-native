import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, WrapperStories, WrapperPostFeed } from './styles';

import HeaderNavigation from '../../components/HeaderNavigation';
import Stories from '../../components/Stories';
import Request from '../../services/api/RequestsApi';
import PostFeed from '../../components/PostFeed';

const Feed = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [Profiles, setProfiles] = useState([]);

  const getPerfil = async () => {
    const responseMyProfile = await Request.getProfile('instagram');
    const responseProfiles = await Request.getRandomImages('Profile');
    setMyProfile(responseMyProfile);
    setProfiles(responseProfiles);
  };

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <Container>
      <HeaderNavigation />
      <WrapperStories>
        {myProfile && Profiles && (
          <FlatList
            scrollToOffset={10}
            data={Profiles}
            renderItem={({ item }) => <Stories dataProfiles={item.src} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            bounces={false}
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              padding: 15,
            }}
            ListHeaderComponent={<Stories dataMyProfile={myProfile} />}
          />
        )}
      </WrapperStories>

      <WrapperPostFeed>
        <PostFeed dataMyProfile={myProfile} />
      </WrapperPostFeed>
    </Container>
  );
};

export default Feed;
