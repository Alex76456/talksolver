import React from 'react';
import Slider from "react-slick";
import './MainSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderTwainImg from '../../images/slider-twain.png';
import sliderCurieImg from '../../images/slider-curie.png';
import prevArrow from '../../images/prevArrow.svg';
import nextArrow from '../../images/nextArrow.svg';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style,
        display: "block",
        width: 16,
        height: 32,
        top: '50%',
        left: '100%'
        }}
      onClick={onClick}
    >
      <img src={nextArrow} alt="arrow_left"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style,
        display: "block",
        width: 16,
        height: 32,
        top: '50%',
        left: '-3%',
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt="arrow_left"/>
    </div>
  );
}

function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider">
    <Slider {...settings}>
      <div>
        <div className="slider__item">
          <img className="slider__main-image" src={sliderTwainImg} alt="Марк Твен"/>
          <div className="slider__text-content-container">
            <div className="slider__content-icon"/>
            <p className="slider__text">Через 20 лет вы будете больше разочарованы теми вещами,
              которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани.
              Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!
            </p>
            <p className="slider__author">Марк Твен</p>
          </div>
        </div>
      </div>

      <div>
        <div className="slider__item">
          <img className="slider__main-image" src={sliderCurieImg} alt="Мари Кюри"/>
          <div className="slider__text-content-container">
            <div className="slider__content-icon"/>
            <p className="slider__text">Важно верить, что талант нам даётся не просто так – и что
              любой ценой его нужно для чего-то использовать.
            </p>
            <p className="slider__author">Мари Кюри</p>
          </div>
        </div>
      </div>

    </Slider>
    </div>
  )
}

export default MainSlider;
