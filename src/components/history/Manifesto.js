import React from 'react';
import './Manifesto.css';
import flower from '../../images/manifesto-flower.svg'

function Manifesto() {
  return (
    <section className="manifesto">
        <img className="manifesto__flower" src={flower} alt="цветок" />
        <h2 className="manifesto__title">Манифест</h2>
        <ul className="manifesto__list">
          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Работайте лучше всего из любого места</h3>

            <p className="manifesto__description">Делать свою работу лучше всего — значит быть хозяином своего времени.
            Будь то на вашем столе, в кафе, на пляже или в фургоне, мы поможем вам сохранить свободу, при этом доминируя
            в вашем списке дел. Итак, куда мы идем дальше?</p>
          </li>

          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Простота побеждает каждый раз</h3>

            <p className="manifesto__description">Вам нужен инструмент, которым вы действительно будете пользоваться — то, что
            органично впишется в вашу жизнь. Наши инструменты легкие, недорогие и настолько простые, что
            ваша бабушка сможет ими воспользоваться.</p>
          </li>


          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Адаптивность превосходит универсальность</h3>

            <p className="manifesto__description">Адаптивность превосходит универсальность
            Стиль работы каждого уникален, как и он сам. Кто мы такие, чтобы этому мешать? Рецепт покровительственен,
            поэтому вместо того, чтобы рассказывать вам, как работать, мы создали инструменты, достаточно универсальные,
            чтобы повысить ценность любого рабочего процесса.</p>
          </li>




          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Занят ≠ продуктивен</h3>

            <p className="manifesto__description">Не заполняйте свои 8 часов только ради этого. Оставьте рутинные задачи позади и
            делайте больше за меньшее время, сосредоточившись на том, что действительно важно.</p>
          </li>


          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Выберите что-нибудь и овладейте этим</h3>

            <p className="manifesto__description">Инструменты должны соответствовать своему назначению. Мы руководствуемся видением,
            сфокусированным на лазере, и стремимся воплотить его в жизнь. Результат? Инструменты мирового класса, которые решают проблемы,
            для решения которых они были созданы, вместо того, чтобы пытаться решить миллион задач одновременно и ни к чему не привести.</p>
          </li>


          <li className="manifesto__list-item">
            <h3 className="manifesto__subtitle">Учитесь на опыте других</h3>

            <p className="manifesto__description">Наши инструменты выросли из нашего собственного опыта, столкнувшегося
            с препятствиями в производительности. Мы дорабатываем их более десяти лет, чтобы помочь вам перейти от «э-э-э…» к «о да!».</p>
          </li>
        </ul>
      </section>
  )
}

export default Manifesto;