import React, {useState} from 'react';

import axios from 'axios';
import IosMail from 'react-ionicons/lib/IosMail';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import IosPerson from 'react-ionicons/lib/IosPerson';
import MdCreate from 'react-ionicons/lib/MdCreate';
import MdRemove from 'react-ionicons/lib/MdRemove';

import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';

import './Contact.css';

let api = 'https://matthewsullivan.media';

if (process.env.NODE_ENV === 'development') {
  api = 'http://127.0.0.1:4444';
} else if (process.env.NODE_ENV === 'staging') {
  api = 'https://staging.matthewsullivan.media';
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [label, setLabel] = useState('Submit');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const [response, setResponse] = useState('* Please fill all the fields');

  /**
   * Handle Submit Form
   * @param {object} event
   */
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const data = {
      userName: name,
      userEmail: email,
      userMessage: message,
    };

    setLabel('Sending...');

    axios
      .post(`${api}/api/v1/send-email`, data)
      .then((res) => {
        setResponse(res.message);
        setSent(true);

        resetForm();
      })
      .catch((e) => {
        setLabel('Submit');
        setResponse(e.message);
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
    setResponse('');
  };

  return (
    <section className="contact">
      <Title
        body="Please don't hesitate to reach out to me with any questions."
        chapter="04"
        title="Contact"
      />

      <div className="contact__content">
        <IosMailOutline color="#070a21" fontSize="64" />
        <h2 className="contact__title">E-Mail</h2>
        <a
          className="contact__link"
          href="mailTo:contact@matthewsullivan.media"
        >
          contact@matthewsullivan.media
        </a>
        <MdRemove color="#070a21" />
      </div>

      <div className="contact__form">
        <form className="form" onSubmit={(event) => handleSubmitForm(event)}>
          <div className="form__group">
            <IosPerson className="form__icon" color="#2ecc71" fontSize="24" />
            <input
              className="form__input"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              required
              value={name}
            />
          </div>

          <div className="form__group">
            <IosMail className="form__icon" color="#2ecc71" fontSize="24" />
            <input
              className="form__input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              type="email"
              required
              value={email}
            />
          </div>

          <div className="form__group">
            <MdCreate className="form__icon" color="#2ecc71" fontSize="24" />
            <textarea
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
}
