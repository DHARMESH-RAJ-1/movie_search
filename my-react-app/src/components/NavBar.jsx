import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Movies Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="navbar-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/movies" className="nav-item">Movies</Link>
        <Link to="/watchlist" className="nav-item">Watchlist</Link>
        <Link to="/signin" className="nav-item">Sign In</Link>
      </nav>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
