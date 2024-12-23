import React, { Component } from 'react';
import Eachmovie from '../components/Eachmovie';
import { ApolloConsumer, gql } from '@apollo/client';
import client from '../../client';

const allMovies = gql`
  query GetMovies {
    movies {
      name
      genre
      year
      image
    }
  }
`;

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true, // Add a loading state
    };
  }

  fetchMovies = (client) => {
    client
      .query({ query: allMovies })
      .then((response) => {
        this.setState({
          movies: response.data.movies,
          loading: false, // Set loading to false after fetching
        });
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        this.setState({ loading: false }); // Ensure loading stops even on error
      });
  };

  render() {
    return (
      <ApolloConsumer>
        {(client) => {
          // Fetch movies only if not already fetched
          if (this.state.movies.length === 0 && this.state.loading) {
            this.fetchMovies(client);
          }

          return (
            <div className="movies">
              {this.state.loading ? (
                <h2>We are loading your movies...</h2>
              ) : this.state.movies.length > 0 ? (
                this.state.movies.map((eachmovie) => (
                  <Eachmovie
                    key={eachmovie.name}
                    name={eachmovie.name}
                    genre={eachmovie.genre}
                    year={eachmovie.year}
                    image={eachmovie.image}

                  />
                ))
              ) : (
                <p>No movies found.</p>
              )}
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default Movies;
