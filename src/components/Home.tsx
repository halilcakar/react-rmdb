import React from "react";

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import Grid from "./Grid";
import HeroImage from "./HeroImage";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";
import NotFound from "./NotFound";

const Home: React.FC = () => {
  const { state, searchTerm, error, loading, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) {
    return (
      <NotFound>
        Something went wrong... <br />I think we have a problem with{" "}
        <a href="https://www.themoviedb.org/">TMDB</a>
      </NotFound>
    );
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
