import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, WrapperStories, WrapperPostFeed } from './styles';
import { chain, groupBy, uniqueId } from 'lodash';

import HeaderNavigation from '../../components/HeaderNavigation';
import Stories from '../../components/Stories';
import Request from '../../services/api/RequestsApi';
import PostFeed from '../../components/PostFeed';

const Feed = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [postsFeed, setPostsFeed] = useState([]);

  const getPerfil = async () => {
    const responseImagesProfile = await Request.getRandomImages('Profile');
    const responseImagesPost = await Request.getRandomImages('Instagram');
    const PostsInstagram = chain(responseImagesProfile.photos)
      .map(({ src, photographer, id }, index) => ({
        id: id,
        username: photographer.toLowerCase().replace(/\s/g, '_'),
        avatar_source: src.original,
        avatar_thumbnail: src.tiny,
        post_source: responseImagesPost.photos[index].src.original,
        post_thumbnail: responseImagesPost.photos[index].src.tiny,
        likes: parseInt(Math.random() * 1000),
      }))
      .value();
    setPostsFeed(PostsInstagram);
  };

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <Container>
      <HeaderNavigation />
      <WrapperStories>
        {/* {myProfile && profiles && (
          <FlatList
            scrollToOffset={10}
            data={profiles}
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
        )} */}
      </WrapperStories>

      <FlatList
        initialNumToRender={10}
        data={postsFeed}
        renderItem={({ item }) => <PostFeed data={item} />}
        keyExtractor={(item) => item.id.toString()}
        bounces={false}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          padding: 15,
        }}
      />
    </Container>
  );
};

export default Feed;
