import { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import "./App.css";
import BoxesColor from './components/BoxesColor';
import BoxesColor2 from './components/BoxesColor2';
import Click from './components/Click';
import Comment from './components/Comment';
import Forms from './components/Forms';
import GenerateBoxes from './components/GenerateBoxes';
import MagicBox from './components/MagicBox';
import MemoContainer from './components/MemoContainer';
import Movies from './components/Movie/Movies';
import Navbar from './components/Navbar';
import ReactHookForm from './components/ReactHookForm';
import Register from './components/Register';
import Todos from './components/Todos/Todos';
import UseCheckSize from './components/UseCheckSize';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
// context
import { AppContext } from './context/AppContext';


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
      <Navbar />
      <Route exact path="/forms" component={Forms} />
      <Route exact path="/sample-app-generateBox" component={GenerateBoxes} />
      <Route exact path="/sample-app-boxColor1" component={BoxesColor} />
      <Route exact path="/sample-app-boxColor2" component={BoxesColor2} />
      <Route exact path="/register" component={Register} />
      <Route path="/click" component={Click} />
      <Route path="/comment" component={Comment} />
      <Route path="/todos" component={Todos} />
      <Route path="/movies" component={Movies} />
      <Route path="/use-reducer" component={UseReducer} />
      <Route path="/use-ref" component={UseRef} />
      <Route path="/react-hook-form" component={ReactHookForm} />
      <Route path="/use-memo" component={MemoContainer} />
      <Route path="/use-check-size" component={UseCheckSize} />
      <Route path="/magic-box" component={MagicBox} />

      

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
  );
}

export default App;
