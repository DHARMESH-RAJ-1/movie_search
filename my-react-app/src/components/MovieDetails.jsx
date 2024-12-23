import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Movie from './Movie';
import './Styles.css'

// GraphQL Query for movieByName
const MOVIE_BY_NAME = gql`
  query movieByName($name: String!) {
    movieByName(name: $name) {
      name
      genre
      year
      image
      description
    }
  }
`;

const MovieDetails = () => {
  const { name } = useParams(); // Get the movie name from the URL

  // Fetch movie by name
  const { loading, error, data } = useQuery(MOVIE_BY_NAME, {
    variables: { name },
  });

  if (loading) return <h2>Loading movie details...</h2>;
  if (error) return <h2>Error loading movie: {error.message}</h2>;
  if (!data?.movieByName) return <h2>Movie not found.</h2>;

  const movie = data.movieByName;

  return (
    <div className="movie-details">
        <movie/>
    <div className='detail'> <div className='detail1'> <img
        src={movie.image}
        alt={movie.name}
        style={{
          width: "240px",
          height: "360px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      /></div><div className='detail2'>
      <h1>{movie.name}</h1>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <div className='description'>
      <p>
        <strong>Description:</strong> {movie.description}
      </p></div>
    </div></div></div>
  );
};

export default MovieDetails;
