import React, { useState, useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'learn react'
  },
  {
    id: 2,
    name: 'learn context'
  }
]

export const TodoContext = React.createContext();

const fetchApi = (data) => {
  return new Promise(resovle => {
    setTimeout(resovle(data), 3000)
  })
}

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fecthTodos() {
      const res = await fetchApi(data)
      setTodos(res)
    }    

    fecthTodos();
  }, [])

  function deleteTodo(todoId) {
    setTodos(prevState => {
      const newTodos = prevState.filter(todo => todo.id !== todoId)
      return newTodos
    })
  }

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      name: text
    }

    setTodos(prevState => {
      return [...prevState, newTodo]
    })
  }

  console.log('trodo', todos)

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
} 