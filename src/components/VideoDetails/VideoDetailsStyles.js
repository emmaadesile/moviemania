import styled from "styled-components";

const Video = styled.div`
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    z-index: -10;
  }

  .backdrop {
    height: 680px;
    box-sizing: border-box;
    background-size: cover;
    color: white;
  }

  .backdropBg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: inherit;
    position: absolute;
    top: 92px;
    background-color: rgba(0, 0, 0, 0.7);

    .moreDetails {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;

      .videoRating {
        color: #ddd;

        .fa-fire {
          border-radius: 50%;
          border: 1px solid #ddd;
          padding: 5px 7px;
          color: #e50603;
          margin-right: 5px;
        }
      }
    }
  }
`;

const PlayButton = styled.button`
  background-color: #e50603;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 4px;
  transition: 0.5s background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;
  border: none;
  font-size: 0.9rem;

  &:hover {
    background-color: #d84443;
  }

  .fa-play {
    margin-right: 5px;
  }
`;

const VideoInfo = styled.div`
  max-width: 450px;

  h1 {
    font-size: 3.2rem;
    font-family: "DINNextW01-Bold";
    text-align: left;
  }

  p {
    font-family: "Helvetica Neue";
    line-height: 1.5rem;
    font-size: 1.1rem;
  }

  .releaseDate {
    font-size: 0.9rem;
    margin-top: -2.2rem;
    color: #999;
  }
`;

const VideoTrailer = styled.div`
  left: 0px;
  top: 90px;
  z-index: 100;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  iframe {
    /* position: fixed; */
  }

  .closeTrailer {
    background: #000;
    width: 1200px;
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

export { Video, PlayButton, VideoInfo, VideoTrailer };