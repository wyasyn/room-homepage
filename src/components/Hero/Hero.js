import React from 'react'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import './Hero.scss'

function Hero({img, title, describe, left, right}) {
  return (
    <section className="hero">
        <div className="image">
            <img src={img} alt="hero pic" />
        </div>
        <div className="hero-info">
            <div className="nav">
                <Link to={left} >
                <img src={images.left} alt="arrow" />
                </Link>
                <Link to={right} >
                <img src={images.right} alt="arrow" />
                </Link>
            </div>
            <h1>{title}</h1>
            <p>
                {describe}
            </p>
            <div className="cta">
                <small>SHOP NOW</small>
                <img src={images.arrow} alt="cta" />
            </div>
        </div>
    </section>
  )
}

export default Hero