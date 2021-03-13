import React from 'react';
import './OurHistory.css';
import TitleBlock from '../TitleBlock';
import { titleBlockHistoryData } from '../../data/titleBlockData';


import ArticleSmall from '../ArticleSmall'
import { articleSmallTrust, articleSmallBest, articleSmallНandy } from '../../data/articleSmallData';
import SectionHistory from './SectionHistory';
import Manifesto from './Manifesto';


function OurHistory() {
  return (
    <div className="history">
      <TitleBlock
        title={titleBlockHistoryData.title}
        textContent={titleBlockHistoryData.textContent}
        backgroundImg={titleBlockHistoryData.bgrImage}
        enableBtn={false}/>

      <div className="articles-group">
        <ArticleSmall
          title={articleSmallTrust.title}
          text={articleSmallTrust.textContent}
          backgroundImg={articleSmallTrust.bgrImage}/>
        <ArticleSmall
          title={articleSmallBest.title}
          text={articleSmallBest.textContent}
          backgroundImg={articleSmallBest.bgrImage}/>
        <ArticleSmall
          title={articleSmallНandy.title}
          text={articleSmallНandy.textContent}
          backgroundImg={articleSmallНandy.bgrImage}/>
      </div>
      <SectionHistory />
      <Manifesto />
    </div>
  )
}

export default OurHistory;