import React from 'react'
import {Link} from 'react-router-dom'

const TopNavbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/" className="welcome">EHRS</Link>
      <Link to="/" className="navbar-link">Contact</Link>
      <Link to="/login" className="navbar-link">Login</Link>
      <Link to="/register" className="navbar-link">Register</Link>
      <Link to="/About" className="navbar-link">About</Link>
    </div> 
  )    
}

export default TopNavbar