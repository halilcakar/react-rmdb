import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Image } from "./Thumb.styles";

type Props = {
  image: string;
  clickable: boolean;
  movieId?: number;
};

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
