import React from 'react';
import { NavLink} from 'react-router-dom';
import './Menu.css';

function Menu () {
  return (
    <nav>
      <ul className="menu">
        <NavLink exact to="/"
                 className="menu__link"
                 activeClassName="menu__link_type_accent">Главная</NavLink>
        <NavLink to="/history"
                 className="menu__link"
                 activeClassName="menu__link_type_accent">Наша история</NavLink>
        <NavLink to="/about"
                 className="menu__link"
                 activeClassName="menu__link_type_accent">О нас</NavLink>
        <NavLink to="/contact"
                 className="menu__link"
                 activeClassName="menu__link_type_accent">Контакты</NavLink>
      </ul>
    </nav>
  )
}

export default Menu;
