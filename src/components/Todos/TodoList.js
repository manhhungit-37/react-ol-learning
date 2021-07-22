import { Button, Table } from 'antd';
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from './TodoItem';
import TodoSearch from './TodoSearch';

function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);

  const columns = [
    {
      title: 'Todos',
      dataIndex: 'name',
      key: "name"
    },
    {
      title: 'Action',
      key: "action",
      render: (_, record) => (
        <Button onClick={e => deleteTodo(record.key, e)}>Delete</Button>
      )
    }
  ]

  return (
    <div>
      <TodoSearch />
      <Table columns={columns} dataSource={todos} />
    </div>
  )
}

export default TodoList
