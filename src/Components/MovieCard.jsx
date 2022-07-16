import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const imagesURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
}
