import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className="navbar is-danger"> 
      <p className="title is-3">Can I Eat This???</p>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/recipes" className="navbar-item">Try Your Recipes</Link>
        <Link to="/register" className="navbar-item">Register</Link>
        <Link to="/login" className="navbar-item">Login</Link>
      </div>
      
    </nav>

  )
}

export default Nav
