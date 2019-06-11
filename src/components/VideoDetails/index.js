import React, { Component } from "react";
import { format } from "date-fns";
import Loader from "../Loader";
import {
  Video,
  PlayButton,
  VideoInfo,
  VideoTrailer
} from "./VideoDetailsStyles";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

class VideoDetails extends Component {
  state = {
    loading: false,
    showVideoTrailer: false,
    error: "",
    videoDetails: {
      vote_average: "",
      backdrop_path: "",
      overview: "",
      videoTitle: "",
      releaseDate: "",
      trailerId: ""
    }
  };

  componentDidMount() {
    console.log(this.props)
    this.fetchVideoDetails();
  }

  /**
   * Fetch the detailes of video
   * @returns null
   */
  fetchVideoDetails = () => {
    const { uri, videoId } = this.props;

    const regEx = /movie/;
    const videoType = regEx.test(uri) ? "movie" : "tv";

    const videoDetailsEndpoint = `${baseURL}/${videoType}/${videoId}?api_key=${apiKey}&append_to_response=credits`;
    const videoTrailerEndpoint = `${baseURL}/${videoType}/${videoId}?api_key=${apiKey}&append_to_response=videos`;

    const fetchedVideoDetails = Promise.all([
      fetch(videoDetailsEndpoint).then(resp => resp.json()),
      fetch(videoTrailerEndpoint).then(resp => resp.json())
    ]);

    fetchedVideoDetails.then(data => this.storeVideoDetails(data));
  };

  toggleVideoTrailer = () => {
    this.setState(prevState => ({
      showVideoTrailer: !prevState.showVideoTrailer
    }));
  };

  storeVideoDetails = data => {
    const {
      vote_average,
      backdrop_path,
      overview,
      original_name,
      title,
      first_air_date,
      release_date
    } = data[0];

    const {
      videos: { results }
    } = data[1];
    const trailerId = results[0].key;

    const { uri } = this.props;
    const regEx = /movie/;

    let date;
    let videoTitle;

    if (regEx.test(uri)) {
      videoTitle = title;
      date = new Date(release_date);
    } else {
      videoTitle = original_name;
      date = new Date(first_air_date);
    }

    const releaseDate = format(date, "MMM DD, YYYY");

    this.setState({
      videoDetails: {
        vote_average,
        backdrop_path,
        overview,
        videoTitle,
        releaseDate,
        trailerId
      }
    });
  };

  render() {
    const {
      showVideoTrailer,
      videoDetails,
      videoDetails: {
        backdrop_path,
        videoTitle,
        overview,
        releaseDate,
        vote_average,
        trailerId
      }
    } = this.state;

    return (
      <>
        {Object.keys(videoDetails).length === 0 ? (
          <Loader />
        ) : (
          <>
            <Video>
              <div className="backdrop">
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt="video_backdrop"
                />
                <div className="backdropBg">
                  <div>
                    <VideoInfo>
                      <h1>{videoTitle}</h1>
                      <p className="releaseDate">Release Date: {releaseDate}</p>
                      <p>{overview}</p>
                    </VideoInfo>

                    <div className="moreDetails">
                      <PlayButton
                        type="button"
                        onClick={this.toggleVideoTrailer}
                        aria-labelledby="play-button"
                      >
                        <i className="fas fa-play"></i>
                        <span>Play Trailer</span>
                      </PlayButton>

                      <div className="videoRating">
                        <i className="fas fa-fire"></i>
                        <span>{vote_average} / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Video>
            {showVideoTrailer && (
              <VideoTrailer>
                <div className="closeTrailer">
                  <i
                    className="fa fa-times"
                    aria-labelledby="close-trailer"
                    onClick={this.toggleVideoTrailer}
                  ></i>
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${trailerId}`}
                  title="videoTrailer"
                  allowFullScreen
                  width="1200"
                  height="650"
                  frameBorder="0"
                ></iframe>
              </VideoTrailer>
            )}
          </>
        )}
      </>
    );
  }
}

export default VideoDetails;
