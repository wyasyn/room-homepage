import React from 'react'
import './CardService.scss'

function CardService({img, title, description }) {
  return (
    <div className="card-service">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>
        {description}
    </p>
</div>
  )
}

export default CardService