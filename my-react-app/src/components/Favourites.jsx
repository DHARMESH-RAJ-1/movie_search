import React from 'react';

const FavouriteMovies = ({ movies }) => {
  const favouriteMovies = movies.filter(movie => movie.favourite);

  return (
    <div className="favourite-movies">
      <h2>Favourite Movies</h2>
      {favouriteMovies.length > 0 ? (
        favouriteMovies.map((movie) => (
          <div key={movie.name} className="card">
            <img
              src={movie.image}
              alt={movie.name}
              style={{
                width: "100%",
                height: "240px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h2>{movie.name}</h2>
            <h4>{movie.genre} - {movie.year}</h4>
          </div>
        ))
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
};

export default FavouriteMovies;
