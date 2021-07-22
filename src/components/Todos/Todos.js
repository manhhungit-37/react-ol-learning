import React from 'react'
import { Space } from 'antd';
import 'antd/dist/antd.css'


// components
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todos() {
  return (
    <div className="todos">
      <Space direction="vertical">
        <TodoForm />
        <br />
        <TodoList />
    </Space>
    </div>
  )
}

export default Todos
