import React from 'react'
import './EasyBank.scss'
import CardService from "../CardService/CardService"
import { Data } from '../../constants/Data';

function EasyBank() {
  return (
    <section className="services">
        <div className="services-container container">
            <div className="info">
                <h2>Why choose Easybank?</h2>
                <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
                </p>
            </div>
            <div className="service">
               {Data.map((data) => (
                <CardService
                key={data.title}
                {...data}
                 />
               ))}
            </div>
        </div>
    </section>
  )
}

export default EasyBank