import styled from "styled-components";

const Video = styled.div`
  img {
    width: 100%;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 16px 30px -8px rgba(0, 0, 0, 0.15);
      transform: translateY(-11px);
    }
  }
`;

const VideoInfo = styled.div`
  cursor: pointer;

  .movieTitle {
    font-weight: 300;
    font-size: 1.2em;
    color: #000 !important;
  }
  .releaseDate {
    font-weight: 300;
    color: grey;
    margin-top: -10px;

    &:hover {
      color: grey !important;
    }
  }
`;

export { Video, VideoInfo };
