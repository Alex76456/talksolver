import React from 'react';
import './Workers.css';
import alexa from '../../images/Alexa.png';
import alexandr from '../../images/Alexandr.png';
import alex from '../../images/Alex.png';
import serg from '../../images/Serg.png';


function Workers() {
  return (
    <div className="workers">
      <ul className="workers__list">
        <li className="workers__card">
          <img className="workers__card-avatar" src={alexa} alt="Александра" />
          <h3 className="workers__card-name">Александра</h3>
          <p className="workers__card-description">UX/UI дизайнер. Проектирование интерфейсов стало для меня не только
          проффесиональной сферой, но с способом взаимодействия с миром. </p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={alexandr} alt="Александр" />
          <h3 className="workers__card-name">Александр</h3>
          <p className="workers__card-description">Веб-дизайнер. Создаю графическое и визуальное наполнения сайта.
          </p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={alex} alt="Алексей" />
          <h3 className="workers__card-name">Алексей</h3>
          <p className="workers__card-description">Front-end разработчик. Верстальщик и программист в одном лице,
          герой стиля и кода, создающий пользовательский интерфейс.</p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={serg} alt="Сергей" />
          <h3 className="workers__card-name">Сергей</h3>
          <p className="workers__card-description">Front-end разработчик. Мастерски нахожу сложные задачи в коде и
          феерично решаю их с Stack Overflow и npmjs. Гуру Google search'а.</p>
        </li>
      </ul>
    </div>
  )
}

export default Workers;