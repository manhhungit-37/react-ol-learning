import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import GenerateBoxes from './GenerateBoxes';

import BoxesColor from './BoxesColor';
import BoxesColor2 from './BoxesColor2';
import Click from './Click';
import Comment from './Comment';
import Forms from './Forms';
import MagicBox from './MagicBox';
import MemoContainer from './MemoContainer';
import Movies from './Movie/Movies';
import Navbar from './Navbar';
import PublicPage from './PublicPage';
import ReactHookForm from './ReactHookForm';
import Register from './Register';
import Todos from './Todos/Todos';
import UseCheckSize from './UseCheckSize';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import { AuthenticateContext } from '../context/AuthenticateContext';


function ProtectedPage() {
  const { setIsAuthenticate } = useContext(AuthenticateContext);

  return (
    <div>
      <button onClick={() => setIsAuthenticate(false)}>Logout</button>
      <Navbar />
      <Redirect exact from="/" to="/home" render={(props) => <GenerateBoxes {...props} />} />
      <Route exact path="/sample-app-generateBox" component={GenerateBoxes} />
      <Route exact path="/sample-app-boxColor" component={BoxesColor} />
      <Route exact path="/sample-app-boxColor2" component={BoxesColor2} />
      <Route path="/register" component={Register} />
      <Route path="/click" component={Click} />
      <Route path="/comment" component={Comment} />
      <Route path="/todos" component={Todos} />
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movies} />
      <Route path="/use-reducer" component={UseReducer} />
      <Route path="/use-ref" component={UseRef} />
      <Route path="/react-hook-form" component={ReactHookForm} />
      <Route path="/use-memo" component={MemoContainer} />
      <Route path="/use-check-size" component={UseCheckSize} />
      <Route path="/magic-box" component={MagicBox} />
      <Route exact path="/forms" component={Forms} />
    </div>
  )
}

export default ProtectedPage
