import React from 'react';
import { NavLink } from 'react-router-dom';
import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback">
      <h2 className="feedback__title">Вы не нашли формулировку вашей проблемы?
        Напишите нам!</h2>
      <p className="feedback__subtitle">
        Запоните форму обратной связи и мы вам ответим в течении 1 часа.
      </p>
      <NavLink
        to="/contact"
        onClick={() => {window.scrollTo({top: 600, behavior: "smooth"})}}
        className="feedback__btn">
        Написать
      </NavLink>
    </div>

  )
}

export default Feedback;
