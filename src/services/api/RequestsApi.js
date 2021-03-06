import api from './index.js';
import PexelsApi from './PexelsApi';
export class Request {
  getProfile = async (profileName) => {
    const response = await api.get(`/${profileName}`, {
      params: {
        __a: 1,
      },
    });

    return response.data.graphql.user;
  };

  getRandomImages = async (search, page) => {
    const response = await PexelsApi.get('/search', {
      headers: {
        authorization: '563492ad6f917000010000019bbcaa18ce6d499599e08cf2b0acde8e',
      },
      params: {
        query: search,
        page: page,
        per_page: 30,
      },
    });

    return response.data;
  };
}

export default new Request();

//https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=
