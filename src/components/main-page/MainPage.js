import React from 'react';
import './MainPage.css';
import CensorModule from './CensorModule';
import Feedback from './Feedback';
import TitleBlock from '../TitleBlock';
import { titleBlockMainData } from '../../data/titleBlockData';
import ArticleSmall from '../ArticleSmall'
import { articleSmallExact, articleSmallFast, articleSmallProtect } from '../../data/articleSmallData';
import MainSlider from './MainSlider'

function MainPage() {
  return (
    <div className="main-page">
      <TitleBlock
        title={titleBlockMainData.title}
        textContent={titleBlockMainData.textContent}
        backgroundImg={titleBlockMainData.bgrImage}
        enableBtn={true}/>

      <div className="articles-group">
        <ArticleSmall
          title={articleSmallExact.title}
          text={articleSmallExact.textContent}
          backgroundImg={articleSmallExact.bgrImage}/>
        <ArticleSmall
          title={articleSmallFast.title}
          text={articleSmallFast.textContent}
          backgroundImg={articleSmallFast.bgrImage}/>
        <ArticleSmall
          title={articleSmallProtect.title}
          text={articleSmallProtect.textContent}
          backgroundImg={articleSmallProtect.bgrImage}/>
      </div>

      <CensorModule />
      <MainSlider />
      <Feedback />
    </div>
  )
}

export default MainPage;