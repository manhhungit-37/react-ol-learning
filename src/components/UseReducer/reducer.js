const actionTypes = {
  INCREMENT: 'INCREMENT',
  DESCREMENT: 'DESCREMENT',
  SHOW_LOADING: 'SHOW_LOADING',
  HIDDEN_LOADING: 'HIDDEN_LOADING',
  SET_COUNT_ONE: 'SET_COUNT_ONE',
  SET_COUNT_TEN: 'SET_COUNT_TEN'
}

const initialState = {
  count: 1,
  isLoading: false
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case actionTypes.INCREMENT: {
      return {
        ...state, 
        count: state.count + payload
      }
    }
    case actionTypes.DESCREMENT: {
      return {
        ...state, 
        count: state.count - payload
      }
    }
    case actionTypes.SHOW_LOADING: {
      return {
        ...state, 
        isLoading: true
      }
    }
    case actionTypes.HIDDEN_LOADING: {
      return {
        ...state, 
        isLoading: false
      }
    }
    case actionTypes.SET_COUNT_ONE: {
      return {
        ...state, 
        count: payload
      }
    }
    case actionTypes.SET_COUNT_TEN: {
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


export { initialState, reducer, actionTypes }