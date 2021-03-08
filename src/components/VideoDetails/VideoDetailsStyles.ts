import styled from "styled-components";

const MoviePoster = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  z-index: -10;
  position: absolute;
  top: 0;
`;

const Video = styled.div`
  /* height: calc(100vh - 162px); */

  .backdrop {
    color: #eee;
  }

  .backdropBg {
    @media (min-width: 768px) {
      grid-template-columns: 1fr;

      .moreDetails {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 576px) {
      .moreDetails {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }

    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100vh;

    top: 92px;
    background-color: rgba(0, 0, 0, 0.7);

    .moreDetails {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      grid-gap: 15px;
      align-items: center;
      margin-top: 1rem;

      .videoRating {
        color: #ddd;

        .fa-fire {
          border-radius: 50%;
          border: 1px solid #ddd;
          padding: 10px 12px;
          color: #e50603;
          margin-right: 10px;
        }
      }
    }
  }
`;

const PlayButton = styled.button`
  background-color: #e50603;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  transition: 0.5s background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;
  border: none;
  font-size: 0.9rem;
  justify-self: start;

  &:hover {
    background-color: #d84443;
  }

  .fa-play {
    margin-right: 5px;
  }
`;

const VideoInfo = styled.div`
  max-width: 450px;
  padding: 10px 20px;

  h1 {
    font-size: 3.2rem;
    text-align: left;
  }

  p {
    font-size: 1.1rem;
  }

  .releaseDate {
    font-size: 1rem;
    margin: 0.5rem 0 1.5rem;
    color: #999;
  }

  .overview {
    line-height: 25px;
    color: #eee;
  }
`;

const VideoTrailer = styled.div`
  iframe {
    width: min(800px, 90vw);
    height: 500px;

    @media (max-width: 400px) {
      height: 300px;
    }
  }

  left: 0px;
  top: 5vh;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  .closeTrailer {
    background: #000;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
    align-items: center;

    .fa-times {
      font-size: 20px;
      color: #555;
      font-weight: 900;
      cursor: pointer;
      margin-right: 10px;

      &:hover {
        color: #777;
      }
    }
  }
`;

export { Video, PlayButton, VideoInfo, VideoTrailer, MoviePoster };
