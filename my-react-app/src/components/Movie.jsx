import React, { useState } from "react";
import { FaSearch, FaHome, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // For navigation links
import "./Styles.css";
import { useLazyQuery, gql } from "@apollo/client";

// GraphQL Query for movieByName
const MOVIE_BY_NAME = gql`
  query movieByName($name: String!) {
    movieByName(name: $name) {
      name
      genre
      year
      image
    }
  }
`;

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // Tracks if a search was initiated
  const [movieByName, { data, loading, error }] = useLazyQuery(MOVIE_BY_NAME);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a movie name");
      return;
    }
    setHasSearched(true); // Mark search as initiated
    movieByName({ variables: { name: searchTerm } });
  };

  return (
    <>
      <header className="header">
        <div className="navbar">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text">
              <span className="highlight">Movies</span> Hub
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <Link to="/" className="nav-item">
              <FaHome className="icon" /> Home
            </Link>
            <Link to="/favourites" className="nav-item">
              <FaHeart className="icon" /> Favourite
            </Link>
          </nav>

          {/* Search Functionality */}
          <div className="search-bar">
            <input
              className="input"
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>

      {/* Movie Details Section */}
      <div className="movie-details">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && hasSearched && !data?.movieByName && <p>No movie found</p>}
        {data?.movieByName && (
          <div className="movie-card">
            <img
              src={data.movieByName.image}
              alt={data.movieByName.name}
              className="movie-image"
              style={{
                width: "100%",
                height: "240px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h4>{data.movieByName.name}</h4>
            <p>
              {data.movieByName.genre} - {data.movieByName.year}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
