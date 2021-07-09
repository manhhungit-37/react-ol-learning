import React, { useRef, useContext } from 'react'

import { TodoContext } from '../../context/TodoContext';

function TodoForm() {
  const textRef = useRef();
  const { addTodo } = useContext(TodoContext);

  return (
    <div>
      Todo: 
      <input 
        ref={textRef}
        type="text" 
        onChange={e => textRef.current.value = e.target.value} 
      /> 
      <button 
        type="button"
        onClick={() => {
          addTodo(textRef.current.value)
          textRef.current.value = ''
        }}
      >
        Add Todo
      </button>

    </div>
  )
}

export default TodoForm
