import React from 'react';
import './Sociallinks.css';

import fb from '../../images/fb.svg';
import insta from '../../images/insta.svg';
import inn from '../../images/in.svg';
import tvitter from '../../images/tvitter.svg';


function Sociallinks() {
  return (
    <nav>
      <ul className="social-links">
        <li className="social-links__item">
          <img src={fb} alt="fb" />
        </li>

        <li className="social-links__item">
          <img src={insta} alt="insta" />
        </li>

        <li className="social-links__item">
          <img src={inn} alt="in" />
        </li>

        <li className="social-links__item">
          <img src={tvitter} alt="tvitter" />
        </li>
      </ul>
    </nav>
  )
}

export default Sociallinks;