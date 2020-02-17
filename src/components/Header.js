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
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Header = type => {
  const [headerImage, setHeaderImage] = useState("");

  useEffect(() => {
    const fetchHeaderImage = async () => {
      try {
        const imgUrl = await fetch(
          `https://api.themoviedb.org/3/trending/${type}/day?api_key=${key}`
        ).then(resp => resp.json());
        setHeaderImage(imgUrl.results[0].backdrop_path);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHeaderImage();
  }, [type]);

  return (
    <HeroImage>
      <img
        src={`https://image.tmdb.org/t/p/original${headerImage}`}
        alt="header-img"
      />
    </HeroImage>
  );
};

export default Header;