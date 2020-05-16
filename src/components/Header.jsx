import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/about'>About</Link>
  </div>
)

export default Header
