import React, { useState, useContext, useEffect } from 'react';
import { Input } from 'antd';

import { TodoContext } from '../../context/TodoContext';
import useDebounce from '../../hooks/useDebounce';

function TodoSearch() {
  const { fetchApiWithConditional,todos } = useContext(TodoContext);
  const [text, setText] = useState('');
  //hooks
  const { textDebounce } = useDebounce(text);

  console.log(todos);

  function handleSearch(e) {
    const value = e.target.value;
    setText(value);
  }

  useEffect(() => {
    fetchApiWithConditional(textDebounce)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textDebounce])

  return (
    <div>
      <form>
        <label htmlFor="searchTerm">Search:</label>
        <Input type="text" id="searchTerm" onChange={handleSearch} />
      </form>
    </div>
  )
}

export default TodoSearch
