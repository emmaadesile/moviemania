import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  TrendingText,
  TrendingVidoes,
  TrendingHeader,
} from "./HomeStyles";
import Video, { VideoProps } from "../Video";

const key = process.env.REACT_APP_TMDB_API_KEY;
const type = "movie";
const endpoint = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${key}`;

const Home: React.FC = () => {
  const [trendingVideos, setTrendingVideos] = useState<VideoProps[]>([]);
  const [activeVideo, setActiveVideo] = useState<VideoProps>({
    id: "",
    poster_path: "",
    backdrop_path: "",
    overview: "",
    original_title: "",
  });

  useEffect(() => {
    let isFetching = true;

    (async () => {
      if (isFetching) {
        try {
          const { results }: { results: VideoProps[] } = await fetch(
            endpoint
          ).then((resp) => resp.json());
          const vids = results.slice(0, 5);
          const {
            poster_path,
            backdrop_path,
            overview,
            original_title,
          } = vids[0];
          setTrendingVideos(vids);

          setActiveVideo({
            poster_path,
            backdrop_path,
            overview,
            original_title,
          });
        } catch (error) {
          console.error(error);
        }
      }
    })();

    return () => {
      isFetching = false;
    };
  }, []);

  const getActiveVideo = (id: string) => {
    const activeVid = trendingVideos.filter((vid) => vid.id === id);
    const {
      poster_path,
      backdrop_path,
      overview,
      original_title,
    } = activeVid[0];
    setActiveVideo(() => ({
      poster_path,
      backdrop_path,
      overview,
      original_title,
    }));
  };

  return (
    <Container>
      <TrendingHeader>
        <section className="feature feature1">
          <picture>
            <source
              srcSet={`https://image.tmdb.org/t/p/w342${activeVideo.poster_path}`}
            />
            <img
              src={`https://image.tmdb.org/t/p/w342${activeVideo.poster_path}`}
              alt="trending-vid"
            />
          </picture>
        </section>
        <section className="feature feature2">
          <picture>
            <source
              srcSet={`https://image.tmdb.org/t/p/original${activeVideo.backdrop_path}`}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${activeVideo.backdrop_path}`}
              alt="trending-vid"
            />
          </picture>

          <div className="overlay">
            <div className="overview">
              <h1>{activeVideo.original_title}</h1>
              <p>{activeVideo.overview}</p>
            </div>
          </div>
        </section>
      </TrendingHeader>

      <Content>
        <TrendingText>Trending Videos</TrendingText>

        <TrendingVidoes>
          {trendingVideos.map((vid) => (
            <Video
              key={vid.id}
              type="trending"
              video={vid}
              onClickHandler={() => getActiveVideo(vid.id as string)}
            />
          ))}
        </TrendingVidoes>
      </Content>
    </Container>
  );
};

export default Home;
