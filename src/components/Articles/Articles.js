import React from 'react'
import './Artcles.scss';
import { ArticlesData } from '../../constants/Data';
import CardArticle from "../CardArticle/CardArticle";

function Articles() {
  return (
    <section className="articles">
        <div className="articles-container container">
            <h2>Latest Articles</h2>
            <div className="wrapper">
               {ArticlesData.map((article) => (
                <CardArticle
                key={article.img}
                {...article}
                 />
               ))}
            </div>
        </div>
    </section>
  )
}

export default Articles