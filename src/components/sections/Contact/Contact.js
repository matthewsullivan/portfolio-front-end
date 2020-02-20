import React, {useState} from 'react';

import axios from 'axios';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import MdRemove from 'react-ionicons/lib/MdRemove';

import Title from '../../elements/Title/Title';

import './Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [label, setLabel] = useState('Submit');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const [response, setResponse] = useState('');

  /**
   * Handle Submit Form
   * @param {object} event
   */
  const handleSubmitForm = (event) => {
    event.preventDefault();

    let api = 'https://matthewsullivan.media';

    if (process.env.NODE_ENV === 'development') {
      api = 'http://127.0.0.1:4444';
    } else if (process.env.NODE_ENV === 'staging') {
      api = 'https://staging.matthewsullivan.media';
    }

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
          <input
            className="form__input"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            type="text"
            required
            value={name}
          />
          <input
            className="form__input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            type="email"
            required
            value={email}
          />
          <textarea
            className="form__input"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please write your message here"
            required
            type="text"
            value={message}
          />

          <div className="form__button">
            {response}

            <button className="button" type="submit">
              {sent ? 'Submit Another' : label}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
