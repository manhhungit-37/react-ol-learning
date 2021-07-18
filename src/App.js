import { useState, useEffect, useContext, useCallback } from 'react';
import { Route } from 'react-router-dom';
import Click from './components/Click';
import Comment from './components/Comment';
import GenerateBoxes from './components/GenerateBoxes';
import Forms from './components/Forms';
import BoxesColor from './components/BoxesColor';
import "./App.css"
import BoxesColor2 from './components/BoxesColor2';
import Register from './components/Register';
import Todos from './components/Todos/Todos';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import Navbar from './components/Navbar';

// context
import { AppContext } from './context/AppContext';
import MovieContextProvider from './context/MovieContext';
import Movies from './components/Movie/Movies';
import ReactHookForm from './components/ReactHookForm';
import UseMemo from './components/UseMemo';
import UseCheckSize from './components/UseCheckSize';

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
  const [title, setTitle] = useState('truong memo')


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


  const handleTitle = useCallback(
  () => {
    console.log('handleTitle', count)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  console.log('users', users)

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/forms" component={Forms} />
      <Route exact path="/sample-app-generateBox" component={GenerateBoxes} />
      <Route exact path="/sample-app-boxColor1" component={BoxesColor} />
      <Route exact path="/sample-app-boxColor2" component={BoxesColor2} />
      <Route exact path="/register" component={Register} />

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
      <Click />

      <Comment />
      
      <h3>Effect Hook</h3>
      {users.length > 0 && users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      
      <button type="button" onClick={() => setCount(count + 1)}>count adasdasdsadasd</button>

      <h3> Sample Todo Context</h3>
      <Todos />

      <MovieContextProvider>
        <Movies />
      </MovieContextProvider>

      <UseReducer />
      
      <UseRef />

      <h1>React hook form</h1>

      <ReactHookForm />

      -----------------------------
      <h3>memo hook</h3>
      <UseMemo title={title} releaseData="123" handleTitle={handleTitle} />
      <button type="button" onClick={() => setTitle(`truong_${Date.now()}`)}>try to change title</button>

      -----------------------------
      <h3>Custom Hook</h3>
      <UseCheckSize />
    </div>
  );
}

export default App;
