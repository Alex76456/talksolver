import React from 'react';
import './SectionHistory.css';
import firstImage from '../../images/history-ourhistory-1-image.svg';
import secondImage from '../../images/history-ourhistory-2-image.svg';


function SectionHistory() {
  return (
    <section className="our-history">
        <h1 className="our-history__title">Наша история</h1>
        <ul className="our-history__list">
          <li className="our-history__list-item">
            <div className="our-history__description">
              <p className="our-history__paragraph">Итак, далекий 2020 год. Мы с ребятами засели на кухне поздно вечером и начал думать.
              Народная пословица гласит: «От слова до дела сто вёрст». В этот раз именно так и вышло.</p>

              <p className="our-history__paragraph">Мы долго ходили, раздумывали, смаковали идею нашего детища, однако,
              к реальным действиям не приступали. Было внутреннее сопротивление, некий порог, переступить
              который было сложно. Нам всегда что-то мешало.</p>

              <p className="our-history__paragraph">Итак, после долгих дней раздумий и размышлений мы приступили-таки к реализации задуманного.</p>
              <p className="our-history__paragraph">Через три недели упорного труда у меня появился первый прототип,
              который уже можно было показывать клиентам. Так родился TalkSolver.</p>
            </div>
            <img className="our-history__image" src={firstImage} alt="подумай" />
          </li>

          <li className="our-history__list-item">
            <div className="our-history__description">
              <p className="our-history__paragraph">Однако не тут-то было. Возникли сложности. Но судьба не оставила нас одних в наших проблемах.</p>

              <p className="our-history__paragraph">Со временем нам посчастливилось заинтересовать одного из знакомых. Элину мы знали давно,
              и именно она первой пришла нам на ум, когда мы поняли, что не справляемся.</p>

              <p className="our-history__paragraph">Элина уже имела за плечами свой удачный стартап и с радостью согласилась принять участие в новом.</p>
              <p className="our-history__paragraph">Она снял с нас огромную часть задач по разработке,  а высвободившееся время мы удачно инвестировали в продвижение.</p>
              <p className="our-history__paragraph">Со временем к проекту присоединились ещё единомышленники. Команда стала сильней, мы пошли уверенней.</p>
            </div>
            <img className="our-history__image" src={secondImage} alt="посмотри" />
          </li>
        </ul>
      </section>
  )
}

export default SectionHistory;