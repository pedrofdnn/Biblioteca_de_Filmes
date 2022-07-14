import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { BiBorderRadius, BiMoviePlay } from "react-icons/bi";

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
          <HiOutlineSearchCircle />
        </button>
      </form>
    </nav>
  );
}
