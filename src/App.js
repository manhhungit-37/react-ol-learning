import { useState } from 'react';
import Click from './components/Click';
import Comment from './components/Comment';
import GenerateBoxes from './components/GenerateBoxes';
import "./App.css"

function App() {
  const [messages, setMessages] = useState({ // memoryA
    text: ''
  });
  const [replaceObj, setReplaceObj] = useState({
    message: '',
    id: 1
  })

  console.log('after render: ', messages)
  console.log('after render replaceObj: ', replaceObj)

  return (
    <div className="App">
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
      <Click />

      <Comment />

      <GenerateBoxes />
    </div>
  );
}

export default App;
