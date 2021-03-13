import React from 'react';
import './AboutUs.css';

import TitleBlock from '../TitleBlock';
import { titleBlockAboutData } from '../../data/titleBlockData';

import Workers from './Workers.js'
import additionImage from '../../images/about-addition-image.svg';


function AboutUs() {
  return (
    <div className="about">
      <TitleBlock
        title={titleBlockAboutData.title}
        textContent={titleBlockAboutData.textContent}
        backgroundImg={titleBlockAboutData.bgrImage}
        enableBtn={false}/>
      <Workers />

      <div className="about__addition">
        <h2 className="about__addition-title">Мы считаем, что наше приложение — это больше, чем просто инструмент для перевода.</h2>
        <div>
          <p className="about__addition-description">Для большинства людей перевод - это маркетинговый материал. Но для нас это
          инструмент для общения, сотрудничества, обучения и др. </p>

          <p className="about__addition-description">Мы думаем, что наше приложение должно быть площадкой для где вы всегда
          можете найти ответ. Место, где вы создаете и делитесь самыми невероятными ситуациями. Мы всегда делаем все
          возможное, чтобы вы получили то, что надо, потому что в конечном итоге действительно важно то, что вы говорите,
          а не инструмент, который вы используете.</p>
        </div>

         <img className="about__addition-image about__addition-image_position_right" src={additionImage} alt="Это так ;)" />
      </div>
    </div>
  )
}

export default AboutUs;