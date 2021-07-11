import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

function MovieList() {
  const { movies, deleteMovie } = useContext(MovieContext);

  return (
    <div>
      {movies.length > 0 && movies.map(movie => (
        <div key={movie.id}>
          <div>{movie.name}</div>
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;