import React from 'react';
import './Footer.css';

import { NavLink } from 'react-router-dom';

import Sociallinks from './Sociallinks';




function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__nav">

         <NavLink exact to="/" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
                  className="footer__nav-link">Главная</NavLink>

          <NavLink to="/history" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
                  className="footer__nav-link">Наша история</NavLink>

          <NavLink to="/about" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
                  className="footer__nav-link">О нас</NavLink>

          <NavLink to="/contact" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
                  className="footer__nav-link">Контакты</NavLink>
        </ul>
      </nav>

      <Sociallinks />

      <p className="footer__copyright">© TalkSolver, Inc., 2020 г. TalkSolver, логотип TalkSolver являются
      товарными знаками или зарегистрированными товарными знаками TalkSolver, Inc.
      в США и всём остальном мире. Все права сохранены.</p>
    </footer>
  )
}

export default Footer;