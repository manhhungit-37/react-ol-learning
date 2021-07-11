import React, { useContext, useRef } from 'react';
import { MovieContext } from '../../context/MovieContext';

function MovieForm() {
  const inputRef = useRef();
  const { addMovie } = useContext(MovieContext);

  return (
    <div>
      <h1>Movie Form</h1>
      Name: <input type="text" ref={inputRef} />
      <button onClick={() => {
        if (inputRef.current.value) {
          addMovie(inputRef.current.value);
          inputRef.current.value = "";
        }
      }}>Add</button>
    </div>
  );
}

export default MovieForm;