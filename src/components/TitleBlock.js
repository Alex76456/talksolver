import React from 'react';
import './TitleBlock.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const classNames = require('classnames');

function TitleBlock({ title, textContent, backgroundImg, enableBtn }) {

  return (
    <div className="title-block" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="title-block__content-container">
        <h1 className="title-block__title">{title}</h1>
        <p className="title-block__paragraph">{textContent}</p>
        <AnchorLink offset='100' href="#anchor01"
           className={classNames('tile-block__anchor-btn ',
          {'tile-block__anchor-btn_is-hidden ': !enableBtn, })}
           rel="noreferrer">
          Начать
        </AnchorLink>
      </div>
    </div>
  )
}

export default TitleBlock;
