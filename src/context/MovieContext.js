import React, { useState } from 'react';

export const MovieContext = React.createContext();

const MovieContextProvider = ({children}) => {
  const [movies, setMovies] = useState([]);

  function addMovie(text) {
    const newMovie = {
      id: Date.now(),
      name: text
    }
    setMovies(prevMovie => [...prevMovie, newMovie]);
  }

  function deleteMovie(id) {
    const newMovie = movies.filter(movie => movie.id !== id);
    return setMovies(newMovie); 
  }

  const movieValues = {
    movies,
    addMovie,
    deleteMovie
  }

  return (
    <MovieContext.Provider value={movieValues}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider;