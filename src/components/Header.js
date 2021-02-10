import React, { useState, useEffect } from "react";
import styled from "styled-components";

const key = process.env.REACT_APP_TMDB_API_KEY;

const HeroImage = styled.header`
  height: 300px;
  width: 100%;
  clip-path: polygon(0 0, 0 98%, 100% 92%, 100% 0);

  @media only screen and (min-width: 1280px) {
    height: 600px;
  }

  img {
    width: 100%;
    background-size: cover;
  }
`;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const Header = ({ type }) => {
  const [headerImage, setHeaderImage] = useState("");
  const endpoint = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${key}`;
  useEffect(() => {
    (async () => {
      try {
        const imgUrl = await fetch(endpoint).then((resp) => resp.json());
        const imgIndex = getRandomNumber();
        setHeaderImage(imgUrl.results[imgIndex].backdrop_path);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [type, endpoint]);

  return (
    <HeroImage>
      <img
        src={`https://image.tmdb.org/t/p/original/${headerImage}`}
        alt="header-img"
        loading="lazy"
      />
    </HeroImage>
  );
};

export default Header;
