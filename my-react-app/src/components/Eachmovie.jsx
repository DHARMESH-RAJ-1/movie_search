import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Eachmovie = (props) => {
  return (
    <Link to={`/movie/${props.name}`} className="movie-card-link">
      <div className="card">
        <div className="container">
          <img
            src={props.image}
            alt={props.name}
            style={{
              width: "100%",
              height: "240px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          />
          <h2>{props.name}</h2>
          <h4>{props.genre} - {props.year}</h4>
          <button>Add To Favourite</button>
        </div>
      </div>
    </Link>
  );
};

export default Eachmovie;
