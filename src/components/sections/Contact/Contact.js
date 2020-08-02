import React, {useEffect, useState} from 'react';
import {load} from 'recaptcha-v3';

import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import IosMail from 'react-ionicons/lib/IosMail';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import IosPerson from 'react-ionicons/lib/IosPerson';
import MdCreate from 'react-ionicons/lib/MdCreate';
import MdRemove from 'react-ionicons/lib/MdRemove';

import api from '../../../api/api';
import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';

import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [label, setLabel] = useState('Submit');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('* Please fill all the fields');
  const [sent, setSent] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      const options = {
        useRecaptchaNet: true,
        autoHideBadge: true,
      };

      const recaptcha = await load(
        process.env.SITE_KEY || '6LcgcrkZAAAAAK6lWILukveUvv_j6GMAx00azBw_',
        options
      );
      const token = await recaptcha.execute('contact');

      setToken(token);
    };

    fetchToken();
  }, []);

  /**
   * Handle Submit Form
   * @param {object} event
   */
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const data = {
      userEmail: email,
      userMessage: message,
      userName: name,
      token: token,
    };

    setLabel('Sending...');

    axios
      .post(`${api}/api/v1/send-email`, data)
      .then((res) => {
        setResponse(res.data);
        setSent(true);

        resetForm();
      })
      .catch((e) => {
        setLabel('Submit');
        setResponse(e.response.data);
        setSent(false);
      });
  };

  /**
   * Reset Form
   */
  const resetForm = () => {
    setEmail('');
    setLabel('Submit');
    setMessage('');
    setName('');
    setSent(false);
  };

  return (
    <section className="contact">
      <Title
        body="Please don't hesitate to reach out to me with any questions."
        chapter="04"
        title="Contact"
      />

      <div className="contact__content">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <IosMailOutline color="#070a21" fontSize="64" />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h2 className="contact__title">E-Mail</h2>
          <a
            className="contact__link"
            href="mailTo:contact@matthewsullivan.media"
          >
            contact@matthewsullivan.media
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <MdRemove color="#070a21" />
        </ScrollAnimation>
      </div>

      <div className="contact__form">
        <form className="form" onSubmit={(event) => handleSubmitForm(event)}>
          <div className="form__group">
            <IosPerson className="form__icon" color="#2ecc71" fontSize="24" />

            <input
              aria-label="Name"
              className="form__input"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              type="text"
              value={name}
            />
          </div>

          <div className="form__group">
            <IosMail className="form__icon" color="#2ecc71" fontSize="24" />

            <input
              aria-label="E-mail"
              className="form__input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              type="email"
              value={email}
            />
          </div>

          <div className="form__group">
            <MdCreate className="form__icon" color="#2ecc71" fontSize="24" />

            <textarea
              aria-label="Message"
              className="form__input form__input--textarea"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              type="text"
              value={message}
            />
          </div>

          <p className="form__response">{response}</p>
          <Button type="submit">{sent ? 'Submit Another' : label}</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
