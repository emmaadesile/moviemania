import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const useDataAPI = (videoType, page) => {
  const [videos, setVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const videoPage = page ? page : 1;

  const endpoint =
    videoType === "movie"
      ? `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${videoPage}`
      : `${baseURL}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${videoPage}`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await axios(endpoint);
        storeVideos(fetchedVideos.data.results);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchVideos();
  }, [endpoint, page]);

  const storeVideos = (initialData) => {
    const storedVideos = initialData.map(result => {
      const {
        title,
        vote_count,
        id,
        genre_ids,
        poster_path,
        original_name,
        vote_average,
        first_air_date,
        release_date
      } = result;
      return {
        title,
        vote_count,
        id,
        genre_ids,
        poster_path,
        original_name,
        vote_average,
        first_air_date,
        release_date
      };
    });
    
    setVideos(storedVideos);
  };

  return [videos, isError];
};

export default useDataAPI;
