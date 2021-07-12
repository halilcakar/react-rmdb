import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import Actor from "./Actor";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Images
import { urlBuilder } from "../helpers";

const Movie: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (error) return <div>Something went wrong...</div>;

  if (loading) return <Spinner />;

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
