import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Movies from './containers/Movies';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';

const movies = [
  // Include your movie data here
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Movie /><Movies /><Footer /></>} />
        <Route path="/movie/:name" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
