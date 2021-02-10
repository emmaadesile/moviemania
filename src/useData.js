import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const useData = (videoType, page = 1) => {
  const [videos, setVideos] = useState([]);
  const [isError, setIsError] = useState(false);

  const endpoint =
    videoType === "movie"
      ? `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
      : `${baseURL}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`;

  useEffect(() => {
    let isFetching = true;

    const fetchVideos = async () => {
      try {
        if (isFetching) {
          const { data } = await axios(endpoint);
          const videoData = data.results.map(
            ({
              title,
              vote_count,
              id,
              genre_ids,
              poster_path,
              original_name,
              vote_average,
              first_air_date,
              release_date,
            }) => ({
              title,
              vote_count,
              id,
              genre_ids,
              poster_path,
              original_name,
              vote_average,
              first_air_date,
              release_date,
            })
          );

          setVideos((prevState) => prevState.concat(videoData));
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchVideos();

    return () => {
      isFetching = false;
    };
  }, [endpoint, page]);

  return [videos, isError];
};

export default useData;
