import React from 'react'
import './Footer.scss'
import {images} from "../../constants"
import { Link } from 'react-router-dom'
import { NavData } from '../../constants/Data'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <img className='logo' src={images.logo} alt="logo" />
        <div className="links">
          {NavData.map((item, index) => (
            <Link to="/" key={index} >
              {item}
            </Link>
          ))}
        </div>
        <div class="attribution">
            Challenge by <Link className='link' to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link> Coded by <Link className='link' to="https://walmyas.netlify.app" >Yasin Walum</Link>.
        </div>
        <div className="copyright">
            {currentYear} &copy; Copyright: All rights Reserved.
        </div>
    </footer>
  )
}

export default Footer