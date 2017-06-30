// :TODO CORS issue for a while....
// import axios from 'axios';
// const RootEndpoint = 'https://jikan.me/api/';

export const getAnimeDetail = (animeId: number) => {
  return new Promise((resolve: any, reject: any) => {
    try {
      setTimeout(() => {
        resolve('yeah!!! ' + animeId);
      }, 200);
      // axios({
      //   method: 'get',
      //   url: `https://jikan.me/api/anime/${animeId}`,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/json',
      //    },
      //   })
      //   .then(function (response) {
      //     resolve(response.data);
      //   })
      //   .catch(function (error) {
      //     reject(error);
      //   });
    }
    catch(e) {
      reject(':(');
    }
  });
};
