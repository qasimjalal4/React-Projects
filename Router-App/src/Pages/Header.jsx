import { NavLink } from 'react-router'
import './Header.css'

export function Header() {
  return (
    <nav className='nav-container'>
      <div className='title'>
        Router App
      </div>
      <ul className='navbar-links'>
       <li><NavLink className='link' to='/'>Home</NavLink></li>
       <li><NavLink className='link' to='/about'>About</NavLink></li>
      </ul>
    </nav>
  )
}