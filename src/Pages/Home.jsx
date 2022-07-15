import React, { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div>
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  );
}
