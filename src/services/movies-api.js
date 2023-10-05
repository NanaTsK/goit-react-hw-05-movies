import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8985958d9c3d07552296f275319902b2';

export const getTrendingMovies = async () => {
  return await axios(`/trending/all/day?api_key=${API_KEY}`);
};
