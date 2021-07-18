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
      </ul>
    </div>
  )
}

export default Navbar
