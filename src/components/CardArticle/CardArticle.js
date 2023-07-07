import React from 'react'
import './CardArticle.scss';

function CardArticle({img, name, subtitle, description}) {
  return (
        <div className="card-article">
        <img src={img} alt={name} />
            <div className="info">
                <small>By {name}</small>
                <h3>
                    {subtitle}
                </h3>
                <p>
                {description}
                </p>
            </div>
    </div>
  )
}

export default CardArticle