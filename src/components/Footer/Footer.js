import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <div class="attribution">
            Challenge by <Link className='link' to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link> Coded by <Link className='link' to="https://ywalum.com" >Yasin Walum</Link>.
        </div>
        <div className="copyright">
            {currentYear} &copy; Copyright: All rights Reserved.
        </div>
    </footer>
  )
}

export default Footer
