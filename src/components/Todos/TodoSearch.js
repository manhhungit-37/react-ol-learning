import React, { useState, useRef } from 'react'

function TodoSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const timeOutRef = useRef();

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 2000)
  }

  return (
    <div>
      <form>
        <label htmlFor="searchTerm">Search:</label>
        <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearch} />
      </form>
    </div>
  )
}

export default TodoSearch
