import { ADD_MOVIE, DELETE_MOVIE } from "./types";

function movieReducer(state, { type, payload }) {
  switch(type) {
    case ADD_MOVIE: {
      return [...state, payload];
    }

    case DELETE_MOVIE: {
      const newMovies = state.filter(movie => movie.id !== payload.id);
      return newMovies;
    }

    default: {
      return state;
    }
  }
}

export default movieReducer;