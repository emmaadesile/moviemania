import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

interface Video {
  title: string;
  vote_count: number;
  id: string;
  genre_ids: string;
  poster_path: string;
  original_name: string;
  vote_average: string;
  first_air_date: string;
  release_date: string;
}

const useData = (
  videoType: string,
  page = 1
): [videos: Video[], isError: boolean] => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const endpoint: string =
    videoType === "movie"
      ? `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
      : `${baseURL}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`;

  useEffect(() => {
    let isFetching = true;

    const fetchVideos = async (): Promise<void> => {
      try {
        if (isFetching) {
          const { data } = await axios(endpoint);
          const videoData: Video[] = data.results.map(
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
            }: Video) => ({
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
