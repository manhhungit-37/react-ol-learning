import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { AuthenticateContext } from '../context/AuthenticateContext';

function Login() {
  const { isAuthenticate, setIsAuthenticate } = useContext(AuthenticateContext);

  console.log("is", isAuthenticate);

  function handleSubmit(e) {
    e.preventDefault();
    setIsAuthenticate(true);
  }

  return (
    <>
      {isAuthenticate && <Redirect to="/" />}
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;
