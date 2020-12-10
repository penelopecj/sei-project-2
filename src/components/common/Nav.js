import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className="navbar is-danger"> 
      <p>Can I Eat This??</p>
      <div className="navbar-brand">
        <Link to="/intolerances" className="navbar-item">Intolerances</Link>
        <Link to="/recipes" className="navbar-item">Try Your Recipes</Link>
        <Link to="/" className="navbar-item">Register</Link>
        <Link to="/login" className="navbar-item">Login</Link>
      </div>
      
    </nav>

  )
}

export default Nav
