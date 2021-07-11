import React, { useReducer } from 'react'

// local reducer
import { initialState, reducer, actionTypes } from './reducer';

function UseReducer() {
  const [{ count, isLoading }, dispatch] = useReducer(reducer, initialState)

  function handleIncrement() {
    dispatch({ type: actionTypes.SHOW_LOADING })
    setTimeout(() => {
     dispatch({ type: actionTypes.INCREMENT, payload: 1 })
     dispatch({ type: actionTypes.HIDDEN_LOADING })
    }, 1000)
  }

  function handleDecrement() {
    dispatch({ type: actionTypes.SHOW_LOADING })
    setTimeout(() => {
      dispatch({ type: actionTypes.DESCREMENT, payload: 1 })
      dispatch({ type: actionTypes.HIDDEN_LOADING })
     }, 1000)
  }

  function setOne() {
    dispatch({ type: actionTypes.SET_COUNT_ONE, payload: 1 })
  }

  function setTen() {
    dispatch({ type: actionTypes.SET_COUNT_TEN, payload: 10 })
  }

  return (
    <div>
      <h2>useReducer hooks</h2>
      <p>Count times: {isLoading ? '...Loading' : count}</p>
      <button type="button" onClick={handleIncrement}>+</button>
      <button type="button" onClick={handleDecrement}>-</button>
      <button type="button" onClick={setOne}>set 1</button>
      <button type="button" onClick={setTen}>set 10</button>
    </div>
  )
}

export default UseReducer
