import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2, BiMoviePlay } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiMoviePlay />
          MoviesLib
        </Link>
      </h2>

      <form>
        <input type="text" placeholder="Busque um Filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
