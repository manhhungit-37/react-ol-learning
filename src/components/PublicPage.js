import React, { useState, useEffect } from 'react'

function PublicPage() {
  const [messages, setMessages] = useState({ // memoryA
    text: ''
  });
  const [replaceObj, setReplaceObj] = useState({
    message: '',
    id: 1
  });
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch('https://tony-json-server.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.data)
      })
  }, [])

  return (
    <div>
       <br />
      <br />
      ----------------------------------------------
      <br />
      <br />
      this is message: {messages.text}
      <input 
        type="text" 
        onChange={event => {
          const newMessages = { // memoryB
            text:  event.target.value
          }
          setMessages(newMessages)
        }}
      />
      <br />
      this is replace object: {replaceObj.message}
      <input 
        type="text" 
        onChange={event => {
          const newMessage = event.target.value;
          setReplaceObj(prevState => {
            return {
              ...prevState,
              message: newMessage
            }
          });
        }}
      />
      <h3>Effect Hook</h3>
      {users.length > 0 && users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      
      <button type="button" onClick={() => setCount(count + 1)}>count adasdasdsadasd</button>
    </div>
  )
}

export default PublicPage


