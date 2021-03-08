import React from "react";
import { format } from "date-fns";
import { Video, VideoInfo } from "./VideoStyles";

export interface VideoProps {
  id?: string;
  original_name?: string;
  title?: string;
  first_air_date?: string;
  release_date?: string;
  poster_path: string;
  overview?: string;
  backdrop_path?: string;
  original_title?: string;
}

const VideoCard = ({ video, type, onClickHandler }: 
  { video: VideoProps, type: string, onClickHandler?: () => void }) => {
  let releaseDate;
  let videoTitle;
  let formattedTitle;

  const {first_air_date, release_date, title, original_name} = video;

  if (type === "tv") {
    releaseDate = new Date(Number(first_air_date));
    videoTitle = original_name;
  } else {
    releaseDate = new Date(Number(release_date));
    videoTitle = title;
  }

  if (videoTitle) {
    formattedTitle = videoTitle.length > 20 ? videoTitle.slice(0, 23) + "..." : title;
  }
  const formattedDate = format(releaseDate, "MMM DD, YYYY");

  return (
    <Video onClick={type === "trending" ? onClickHandler : undefined}>
      <img
        src={`https://image.tmdb.org/t/p/w342/${video.poster_path}`}
        alt="movie_poster"
      />
      <VideoInfo>
        <p className="movieTitle">{formattedTitle}</p>
        <p className="releaseDate">{formattedDate}</p>
      </VideoInfo>
    </Video>
  );
};

export default VideoCard;
