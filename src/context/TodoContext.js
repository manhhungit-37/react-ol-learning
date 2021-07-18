import React, { useState, useEffect } from 'react';

const data = JSON.parse(localStorage.getItem("data")) || [];

export const TodoContext = React.createContext();



export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState([]);

  useEffect(() => {
    async function fecthTodos() {
      const res = await fetchApi();
      setTodos(res);
    }    

    fecthTodos();
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const fetchApi = () => {
    return new Promise(resovle => {
      resovle(data);
    })
  }

  function fetchApiWithConditional(condition) {
    const newData = todos.filter(todo => todo['name'].indexOf(condition) !== -1);
    setTodosFilter(newData);
  }

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

  return (
    <TodoContext.Provider
      value={{
        todos,
        todosFilter,
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