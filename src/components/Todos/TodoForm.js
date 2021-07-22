import { Button, Input } from 'antd';
import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';


function TodoForm() {
  const [state, setState] = useState(1);
  const textRef = useRef();
  const { addTodo } = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click</button>
      Todo: 
      <Input 
        ref={textRef}
        type="text" 
        onChange={e => textRef.current.value = e.target.value} 
      /> 
      <Button 
        type="button"
        onClick={() => {
          addTodo(textRef.current.value);
          textRef.current.state.value = '';
        }}
      >
        Add Todo
      </Button>
    </div>
  )
}

export default TodoForm
