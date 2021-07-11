import { useState, useEffect, useContext } from 'react';


import Click from './components/Click';
import Comment from './components/Comment';
import GenerateBoxes from './components/GenerateBoxes';
import Forms from './components/Forms';
import BoxesColor from './components/BoxesColor';
import "./App.css"
import BoxesColor2 from './components/BoxesColor2';
import Register from './components/Register';
import Todos from './components/Todos/Todos';
import MovieContextProvider from './context/MovieContext';
// context
import { AppContext } from './context/AppContext';
import MovieForm from './components/Movie/MovieForm';
import MovieList from './components/Movie/MovieList';

function App() {
  const appContext = useContext(AppContext);
  const [messages, setMessages] = useState({ // memoryA
    text: ''
  });
  const [replaceObj, setReplaceObj] = useState({
    message: '',
    id: 1
  })
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);


  console.log('after render: ', messages)
  console.log('after render replaceObj: ', replaceObj)
  console.log('appContext: ', appContext)

  // fetch users
  useEffect(() => {
    fetch('https://tony-json-server.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.data)
      })
  }, [])

  // re-run effect
  useEffect(() => {
    console.log('re-run useEffect: ', count)
  }, [count])

  console.log('users', users)

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

      <h3>Effect Hook</h3>
      {users.length > 0 && users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      
      <button type="button" onClick={() => setCount(count + 1)}>count</button>

      <h3> Sample Todo Context</h3>
      <Todos />

      <MovieContextProvider>
        <MovieForm />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
