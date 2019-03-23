import React, { Component } from 'react';
import { format } from 'date-fns';
import { Video, PlayButton, VideoInfo } from './VideoDetailsStyles';

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

class VideoDetails extends Component {
  state = {
    loading: false,
    error: '',
    videoDetails: {
      vote_average: '',
      backdrop_path: '',
      overview: '',
      videoTitle: '',
      releaseDate: '',
    }
  }

  componentDidMount() {
    this.fetchVideoDetails();
  }

  fetchVideoDetails = () => {
    const { url, params: { videoId } } = this.props.match;
    const regEx = /movie/;
    const videoType = regEx.test(url) ? 'movie' : 'tv'

    const endpoint = `${baseURL}/${videoType}/${videoId}?api_key=${apiKey}&language=en-US`;
      
    fetch(endpoint)
      .then(resp => resp.json())
      .then(details => this.storeVideoDetails(details))
      .catch(error => this.setState({error}));
  }

  storeVideoDetails = data => {
    const {
      vote_average,
      backdrop_path,
      overview,
      original_name,
      title,
      first_air_date,
      release_date,
    } = data;

    const { url } = this.props.match;
    const regEx = /movie/;
    
    let date;
    let videoTitle;

    if (regEx.test(url)) {
      videoTitle = title;
      date = new Date(release_date);
    } else {
      videoTitle = original_name;
      date = new Date(first_air_date);
    }
  
    const releaseDate = format(date, 'MMM DD, YYYY');

    this.setState({
      videoDetails: {
        vote_average,
        backdrop_path,
        overview,
        videoTitle,
        releaseDate,
      }
    });
  }

  render() {
    const { 
      videoDetails: {
        backdrop_path,
        videoTitle,
        overview,
        releaseDate,
        vote_average,
      } 
    } = this.state;
      
    return (
      <Video>
        <div className="backdrop">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="video_backdrop"
          />
          <div className='backdropBg'>
            <div>
              <VideoInfo>
                <h1>{videoTitle}</h1>
                <p className='releaseDate'>Release Date: {releaseDate}</p>
                <p>{overview}</p>
              </VideoInfo>

              <div className='moreDetails'>
                <PlayButton>
                  <i className="fas fa-play"></i>
                  <span>Play Trailer</span>
                </PlayButton>

                <div className='videoRating'>
                  <i className="fas fa-fire"></i>
                  <span>{vote_average} / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Video>
    );
  }
}

export default VideoDetails;