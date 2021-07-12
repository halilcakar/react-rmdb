import React from "react";
import { useParams } from "react-router-dom";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import Actor from "./Actor";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import NotFound from "./NotFound";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Images
import { urlBuilder } from "../helpers";

const Movie: React.FC = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;

  if (error || !movie.original_title) return <NotFound />;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={urlBuilder(actor.profile_path)}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
