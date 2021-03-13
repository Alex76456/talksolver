import React from 'react';
import './Contact.css';
import TitleBlock from '../TitleBlock';
import { titleBlockContactData } from '../../data/titleBlockData';

import { Formik, Field, Form } from "formik";

import feedbackImage from '../../images/contact-form-image.svg';


function Contact() {
  return (
    <div className="contact">
      <TitleBlock
        title={titleBlockContactData.title}
        textContent={titleBlockContactData.textContent}
        backgroundImg={titleBlockContactData.bgrImage}
        enableBtn={false} />


      <div className="contact-feedback">
        <div className="contact-feedback__container">
          <h2 className="contact-feedback__title">Форма обратной связи</h2>
          <Formik
          initialValues={{ nameUser: "", phoneUser: "", textArea: "" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="feedback-form">
            <Field className="feedback-form__input" name="nameUser" type="text" placeholder="Имя*" />
            <Field className="feedback-form__input" name="phoneUser" type="text" placeholder="Номер телефона*" />
            <Field className="feedback-form__input-area" name="textArea" type="text" placeholder="Введите ваш запрос" />
            <button className="feedback-form__submit" type="submit">Отправить</button>
          </Form>
          </Formik>
        </div>

        <img className="" src={feedbackImage} alt="Ты потрясающий!" />

      </div>
    </div>
  )
}

export default Contact;
