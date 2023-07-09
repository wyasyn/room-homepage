import React, {useState} from 'react'
import {  Link, NavLink } from "react-router-dom"
import './navbar.scss'
import { images } from '../../constants';
import { NavData } from '../../constants/Data';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <div className={click ? "backdrop move" : "backdrop"}></div>
    <div className={click ? "navbar move" : "navbar"}>
      <div className="navbar-container container">

      <div className='menu_icon' onClick={handleClick}>
          {click ? <img src={images.close} alt='close icon' /> : <img src={images.menu} alt='open icon' />}
        </div>

        <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src={images.logo} alt='logo' />
        </Link>

      <ul className={click ? "nav-menu move" : "nav-menu"}>
          {NavData.map((data, index) => (
            <li key={index} onClick={closeMobileMenu} > 
                <NavLink to={data.link} >{data.name} </NavLink>
            </li>
          ))}
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar