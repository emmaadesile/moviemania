import styled from "styled-components";

const Video = styled.div`
  img {
    width: 100%;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;

    &:hover {
      box-shadow: 0 7px 15px -8px rgba(0, 0, 0, 0.8);
      transform: translateY(-11px);
    }
  }
`;

const VideoInfo = styled.div`
  cursor: pointer;
  margin-top: 10px;

  .movieTitle {
    font-weight: 300;
    font-size: 1rem;
    color: #cecece;

    @media (min-width: 640px) {
      font-size: 1.2rem;
    }
  }
  .releaseDate {
    font-weight: 300;
    font-size: 0.8rem;
    color: grey;
    margin-top: 0.5rem;

    &:hover {
      color: grey !important;
    }

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }
`;

export { Video, VideoInfo };
