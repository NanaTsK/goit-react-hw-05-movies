import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const HEADERS = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTg1OTU4ZDljM2QwNzU1MjI5NmYyNzUzMTk5MDJiMiIsInN1YiI6IjY0Y2U1MTA1NGQ2NzkxMDBjNTJjMDE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLRqsA4cFkJO0FSKBWymdUd61U2wFnHzZ7zltYr1BcQ',
};
export const getTrendingMovies = async movie => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/trending/all/day?language=en-US`,
    headers: HEADERS,
  };
  const { data } = await axios(options);
  return data;
};
