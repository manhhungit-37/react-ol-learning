import React, { useContext } from 'react'

import { TodoContext } from '../../context/TodoContext';

import TodoItem from './TodoItem';
import TodoSearch from './TodoSearch';

function TodoList() {
  const { todos, todosFilter, fetchApiWithConditional } = useContext(TodoContext);

  function handleSearch(value) {
    fetchApiWithConditional(value);
  }

  return (
    <div>
      <TodoSearch onSubmit={handleSearch} />
      {todosFilter.length > 0 && todosFilter.map(todo => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
      {todosFilter.length === 0 && todos.length > 0 && todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </div>
  )
}

export default TodoList
