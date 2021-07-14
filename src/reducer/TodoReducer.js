
import { INCREMENT, DESCREMENT, SHOW_LOADING, HIDDEN_LOADING, SET_COUNT_ONE, SET_COUNT_TEN } from './types';

const initialState = {
  count: 1,
  isLoading: false
}

function todoReducer(state = initialState, { type, payload }) {
  switch(type) {
    case INCREMENT: {
      return {
        ...state, 
        count: state.count + payload
      }
    }
    case DESCREMENT: {
      return {
        ...state, 
        count: state.count - payload
      }
    }
    case SHOW_LOADING: {
      return {
        ...state, 
        isLoading: true
      }
    }
    case HIDDEN_LOADING: {
      return {
        ...state, 
        isLoading: false
      }
    }
    case SET_COUNT_ONE: {
      return {
        ...state, 
        count: payload
      }
    }
    case SET_COUNT_TEN: {
      return {
        ...state, 
        count: payload
      }
    }
    default: {
      return state
    }
  }
}


export { initialState, todoReducer }