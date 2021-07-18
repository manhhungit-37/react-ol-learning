import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

const items = [{
  id: 1,
  name: 'learn react'
},
{
  id: 2,
  name: 'learn javascript'
}]

export const TodoProvider = ({ children }) => {
  const [defaultTodo, setDefaultTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fecthTodos() {
      const res = await fetchApi();
      setTodos(res);
      setDefaultTodo(res);
    }    

    fecthTodos();
  }, [])

  const fetchApi = () => {
    return new Promise(resovle => {
      resovle(items);
    })
  }

  function fetchApiWithConditional(text) {
    const newData = defaultTodo.filter(todo => todo.name.toLowerCase().indexOf(text) !== -1);
    setTodos(newData)
  }

  function deleteTodo(todoId) {
    const newData = todos.filter(todo => todo.id !== todoId)
    setTodos(newData)
    setDefaultTodo(newData)
  }

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      name: text
    }
    setTodos([...todos, newTodo])
    setDefaultTodo([...todos, newTodo])
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        addTodo,
        fetchApi,
        fetchApiWithConditional
      }}
    >
      {children}
    </TodoContext.Provider>
  )
} 