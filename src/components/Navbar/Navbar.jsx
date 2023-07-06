import React, {useState} from 'react'
import Button from '../Button/Button';
import {  Link, NavLink } from "react-router-dom"
import './navbar.scss'

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <div className="navbar">
      <div className="navbar-container container">

        <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src='assets/logo.svg' alt='logo' />
        </Link>

        <div className='menu_icon' onClick={handleClick}>
          {click ? <img src="assets/icon-close.svg" alt='close icon' /> : <img src='assets/icon-hamburger.svg' alt='open icon' />}
        </div>
        
        <div className={click ? "backdrop move" : "backdrop"}></div>

      <div className={click ? "nav-menu move" : "nav-menu"}>
      <ul className="menu_bar">
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/" className='nav-links'>Home</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/about" className='nav-links'>About</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/contact" className='nav-links'>Contact</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/blog" className='nav-links'>Blog</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/careers" className='nav-links'>Careers</NavLink>
      </li>
    </ul>
    </div>

    <Button
      text="Request Invite"
     />



      </div>
    </div>
    </>
  )
}

export default Navbar