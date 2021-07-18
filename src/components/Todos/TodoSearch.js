import React, { useState, useContext, useEffect } from 'react'

import { TodoContext } from '../../context/TodoContext';
import useDebounce from '../../hooks/useDebounce';

function TodoSearch() {
  const { fetchApiWithConditional } = useContext(TodoContext);
  const [text, setText] = useState('');
  //hooks
  const { textDebounce } = useDebounce(text);

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
        <input type="text" id="searchTerm" value={text} onChange={handleSearch} />
      </form>
    </div>
  )
}

export default TodoSearch
