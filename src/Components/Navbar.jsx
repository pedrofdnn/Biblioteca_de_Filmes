import React, { useState } from "react";
import "..//Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2, BiMoviePlay } from "react-icons/bi";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiMoviePlay />
          MoviesLib
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um Filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
