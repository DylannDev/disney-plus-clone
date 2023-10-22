import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "348c740d045365fd35641c50ee8a557f";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=348c740d045365fd35641c50ee8a557f&language=fr-FR`;

// https://api.themoviedb.org/3/trending/all/day?api_key=348c740d045365fd35641c50ee8a557f&language=fr-FR

export const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey + "&language=fr-FR"
);

export const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
