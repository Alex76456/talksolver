import React from 'react';
import './ArticleSmall.css';

function ArticleSmall ({ title, text, backgroundImg }) {

  return (
    <article className="articles-group__item">
      <div className="articles-group-item__img" style={{ backgroundImage: `url(${backgroundImg})` }} />
      <h3 className="articles-group-item__title">{title}</h3>
      <p className="articles-group-item__text">{text}</p>
    </article>
  )
}

export default ArticleSmall;
