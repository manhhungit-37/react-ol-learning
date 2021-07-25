import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import "./App.css";
import { AuthenticateContext } from './context/AuthenticateContext';
import Login from "./components/Login";
import ProtectedPage from "./components/ProtectedPage";
import PublicPage from './components/PublicPage';

function App() {
  const { isAuthenticate  } = useContext(AuthenticateContext);

  console.log(isAuthenticate);

  return (
    <div className="App">
      <Route path="/login" component={Login} />
      {isAuthenticate ? <ProtectedPage /> : <Redirect to="/login" />}
      <PublicPage />
    </div>
  );
}

export default App;
