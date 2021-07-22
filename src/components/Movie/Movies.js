import React from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieContextProvider from '../../context/MovieContext';

function Movies() {
  return (
    <MovieContextProvider>
      <MovieForm />
      <MovieList />
    </MovieContextProvider>
    
  );
}

export default Movies;