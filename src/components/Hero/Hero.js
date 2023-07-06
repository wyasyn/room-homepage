import React from 'react'
import './Hero.scss'
import Button from "../../components/Button/Button"

function Hero() {
  return (
    <section className="hero">
        <div className="hero-container container">
            <div className="col-1">
                    <h1 className="hero-title">
                        Next generation digital banking
                    </h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button
                    text="Request Invite"
                     />
                </div>
                <div className="col-2">
                    <img className='desktop' src='assets/bg-intro-desktop.svg' alt='intro bg' />
                    <img className='phones' src='assets/image-mockups.png' alt='phones' />
                </div>
            </div>
    </section>
  )
}

export default Hero