import React, { useState } from 'react'


import useDebounce from '../../hooks/useDebounce';

function TodoSearch({ onSubmit }) {
  const [text, setText] = useState('');
  //hooks
  const { textDebounce } = useDebounce(text);

  function handleSearch(e) {
    const value = e.target.value;
    setText(value);
  }

  console.log('textDebounce: ', textDebounce)
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
