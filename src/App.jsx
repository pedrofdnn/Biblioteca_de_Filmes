import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">MoviesLib </Link>
          <Link to="/Movie/1">Movie </Link>
          <Link to="/search">Search</Link>
        </h2>
      </nav>
    </div>
  );
}
