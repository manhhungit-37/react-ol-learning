import React, { useReducer } from 'react'

// local reducer
import { initialState, todoReducer } from '../reducer/TodoReducer';
import { SHOW_LOADING, INCREMENT, HIDDEN_LOADING, DESCREMENT, SET_COUNT_ONE, SET_COUNT_TEN } from '../reducer/types';

function UseReducer() {
  const [{ count, isLoading }, dispatch] = useReducer(todoReducer, initialState)

  function handleIncrement() {
    dispatch({ type: SHOW_LOADING })
    setTimeout(() => {
     dispatch({ type: INCREMENT, payload: 1 })
     dispatch({ type: HIDDEN_LOADING })
    }, 1000)
  }

  function handleDecrement() {
    dispatch({ type: SHOW_LOADING })
    setTimeout(() => {
      dispatch({ type: DESCREMENT, payload: 1 })
      dispatch({ type: HIDDEN_LOADING })
     }, 1000)
  }

  function setOne() {
    dispatch({ type: SET_COUNT_ONE, payload: 1 })
  }

  function setTen() {
    dispatch({ type: SET_COUNT_TEN, payload: 10 })
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
