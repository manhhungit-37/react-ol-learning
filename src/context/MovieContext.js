import React, { useReducer, useState } from 'react';
import movieReducer from '../reducer/MovieReducer';
import { ADD_MOVIE, DELETE_MOVIE } from "../reducer/types";

export const MovieContext = React.createContext();

const MovieContextProvider = ({children}) => {
  const [movies, dispatch] = useReducer(movieReducer, []);

  function addMovie(text) {
    dispatch({
      type: ADD_MOVIE,
      payload: {
        id: Date.now(),
        name: text
      }
    });
  }

  function deleteMovie(id) {
    dispatch({
      type: DELETE_MOVIE,
      payload: {
        id: id
      }
    })
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