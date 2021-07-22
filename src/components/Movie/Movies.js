import React from 'react';
import { useParams } from 'react-router';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieContextProvider from '../../context/MovieContext';

function Movies() {
  const params = useParams();
  console.log('params Movies: ', params)
  return (
    <MovieContextProvider>
      <MovieForm />
      <MovieList />
    </MovieContextProvider>
    
  );
}

export default Movies;