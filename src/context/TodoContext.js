import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

const items = [{
  key: '_' + Math.random().toString(36).substr(2, 9),
  name: 'learn react'
},
{
  key: '_' + Math.random().toString(36).substr(2, 9),
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
    console.log("text", text);
    const newData = defaultTodo.filter(todo => todo.name.toLowerCase().indexOf(text) !== -1);
    setTodos(newData);
  }

  function deleteTodo(todoKey, e) {
    e.preventDefault();
    const newData = todos.filter(todo => todo.key !== todoKey);
    setTodos(newData);
    const newDataDefault = defaultTodo.filter(todo => todo.key !== todoKey);
    setDefaultTodo(newDataDefault);
  }

  function addTodo(text) {
    const newTodo = {
      key: '_' + Math.random().toString(36).substr(2, 9),
      name: text,   
    }
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setDefaultTodo(prevTodos => [...prevTodos, newTodo]);
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