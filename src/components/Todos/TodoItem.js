import React, { useContext } from 'react'

import { TodoContext } from '../../context/TodoContext';

function TodoItem({ id, name }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      {name}
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoItem
