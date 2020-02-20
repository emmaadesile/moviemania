import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  TrendingText,
  TrendingVidoes,
  TrendingHeader
} from "./HomeStyles";
import Video from "../Video";

const key = process.env.REACT_APP_TMDB_API_KEY;
const type = "movie";
const endpoint = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${key}`;

const Home = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(endpoint).then(resp => resp.json());
        setTrendingVideos(data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <TrendingHeader>
        <section className="feature feature1">
          <picture>
            <source srcSet="https://image.tmdb.org/t/p/w342//jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg" />
            <img
              src="https://image.tmdb.org/t/p/w342//jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg"
              alt="trending-vid"
            />
          </picture>
        </section>
        <section className="feature feature2">
          <picture>
            <source srcSet="https://image.tmdb.org/t/p/original/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg" />
            <img
              src="https://image.tmdb.org/t/p/original/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg"
              alt="trending-vid"
            />
          </picture>
        </section>
      </TrendingHeader>

      <Content>
        <TrendingText>Trending Videos</TrendingText>

        <TrendingVidoes>
          {trendingVideos.map(vid => (
            <Video type="movie" key={vid.id} video={vid} />
          ))}
        </TrendingVidoes>
      </Content>
    </Container>
  );
};

export default Home;
