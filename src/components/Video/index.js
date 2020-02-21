import React from "react";
import { format } from "date-fns";
import { Video, VideoInfo } from "./VideoStyles";

const VideoCard = ({ video, type, onClickHandler }) => {
  let releaseDate;
  let title;

  if (type === "tv") {
    releaseDate = new Date(video.first_air_date);
    title = video.original_name;
  } else {
    releaseDate = new Date(video.release_date);
    title = video.title;
  }

  const formattedTitle = title.length > 20 ? title.slice(0, 23) + "..." : title;
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
