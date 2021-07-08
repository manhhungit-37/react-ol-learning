import { useState } from 'react';
import Click from './components/Click';
import Comment from './components/Comment';
import GenerateBoxes from './components/GenerateBoxes';
import Forms from './components/Forms';
import BoxesColor from './components/BoxesColor';
import "./App.css"
import BoxesColor2 from './components/BoxesColor2';
import Register from './components/Register';

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

      <h2>Forms</h2>
      <Forms />

      <h1>Sample App</h1>
      
      <h3>Generate Box</h3>
      <GenerateBoxes />
      <h3>Try to toggle to change background color box</h3>
      <BoxesColor />

      <h3>Change background box 2</h3>
      <BoxesColor2 />
  
      <Register />
    </div>
  );
}

export default App;
