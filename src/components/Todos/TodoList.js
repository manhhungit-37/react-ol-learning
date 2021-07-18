import React, { useContext } from 'react'

import { TodoContext } from '../../context/TodoContext';

import TodoItem from './TodoItem';
import TodoSearch from './TodoSearch';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <TodoSearch />
      {todos.length > 0 && todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </div>
  )
}

export default TodoList
