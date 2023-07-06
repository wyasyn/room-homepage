import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

function Button({text}) {
  return (
    <div className="btn">
      <Link>
        {text}
      </Link>
    </div>
  )
}

export default Button