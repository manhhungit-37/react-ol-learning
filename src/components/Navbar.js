import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/sample-app-generateBox">Sample App: Generate Box</Link></li>
        <li><Link to="/sample-app-boxColor1">Sample App: BoxColor 1</Link></li>
        <li><Link to="/sample-app-boxColor2">Sample App: BoxColor 2</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/click">Click</Link></li>
        <li><Link to="/comment">Comment</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/use-reducer">Use Reducer</Link></li>
        <li><Link to="/use-ref">Use Ref</Link></li>
        <li><Link to="/react-hook-form">React-Hook-Form</Link></li>
        <li><Link to="/use-memo">Use Memo</Link></li>
        <li><Link to="/use-check-size">Use Check Size</Link></li>
        <li><Link to="/magic-box">Magic Box</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
