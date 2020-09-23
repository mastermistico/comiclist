import axios from 'axios';

export const getAllComics = async () => {
    try {
      const response = await axios(`https://comicvine.gamespot.com/api/issues/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json&sort=date_added:desc`);
      //const response = await fetch(`https://restcountries.eu/rest/v2/all`);
      const responseComics = await response;
      return responseComics;
    } catch (err) {
      console.log(err);
    }
  };

export const getDetailsComic = async (urlDetail) => {
    try {
        const response = await axios(`${urlDetail}?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json`);
        const responseDetail = await response;
        return responseDetail;
    } catch (err) {
        console.log(err);
      }
  };  